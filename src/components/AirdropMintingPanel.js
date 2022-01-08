import Image from "./Image";
import { GiftOutline, QuestionCircleOutline } from "antd-mobile-icons";
import {
  Row,
  Col,
  Divider,
  Button,
  Input,
  InputNumber,
  notification,
  Progress,
} from "antd";
import defaultStyles from "../core/theme/styles";
import { Popover } from "antd-mobile";
import React, { useState, useEffect, useRef } from "react";
import WalletModal from "./WalletModal";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { fetchData } from "../redux/data/dataActions";
import { setModalVisible } from "../redux/blockchain/blockchainActions";

const AirdropMintingPanel = ({ size = "normal" }) => {
  const [percent, setPercent] = useState(0);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  let interval = useRef();
  let value = useRef(0)
  let stop = useRef(false)
  let buttonRef = useRef()

  // useEffect(() => {
  //   if (blockchain.aidrop_claimed) return;
  //   buttonRef.current.scrollIntoView({behavior: "smooth", inline: "end"});
  // }, [blockchain])


  useEffect(() => {
    if (!data || data.airdrop < 1) return;
    let target = data.airdrop;
    let increment = 1;
    interval.current = setInterval(() => {
      if (stop.current) return;
      if (value.current >= target)  {
        clearInterval(interval.current);
        stop.current = true
        return
      }
	    value.current += increment
      setPercent((prev) => {
        if (prev + increment > target) return target;
        return prev + increment
      });
    }, 10);

    return () =>  clearInterval(interval.current);
  }, [data]);

  useEffect(() => {
    if (!blockchain.smartContract) return;
    dispatch(fetchData(blockchain.account));
  }, [blockchain.smartContract, dispatch]);

  const claim = async (count) => {
		if (!blockchain.account) {
			return notification.warning({
				message: 'please connect metamask wallet',
			});
		}

		setLoading(true);
    console.log(blockchain.smartContract.methods.airdrop)
		await blockchain.smartContract.methods.airdrop().send({ from: blockchain.account }).once('error', (err) => {
				// console.log(err);
				setLoading(false);
				notification.error({
					message: 'Error',
				});
			}).then((receipt) => {
				console.log(receipt);
				setLoading(false);
				dispatch(fetchData(blockchain.account));
				notification.success({
					message: 'Successfully claim your NFT',
				});
			});
	};

  const getName = () => {
    if (!data.whitelisted && !data.all_whitelist) return 'Apply Whitelist';
    if (blockchain.aidrop_claimed) return 'Claimed';
    if (blockchain.account) return "Claim";
    return "Connect Wallet";
  }

  return (
    <Row justify="center" style={{ marginTop: 40 }}>
      <Col xs={24} md={size === "small" ? 18 : 24}>
        <div
          style={{
            ...defaultStyles.card,
            boxShadow: '0px 3px 10px rgb(0 0 0 / 0.2)',
            padding: size === "small" ? "30px" : "30px",
          }}
        >
          <Row justify="space-between">
            <Col span={4} style={defaultStyles.header}>
              Airdrop
            </Col>
            <Col xs={13} md={size === "small" ? 12 : 10}>
              <Button
                icon={<GiftOutline style={{ fontSize: 20, marginRight: 5 }} />}
                style={{
                  background: "transparent",
                  color: "#2b2b2b",
                  width: "100%",
                }}
                className="app-button"
              >
                Giveaway
              </Button>
            </Col>
            <Divider style={{ margin: "10px 0px" }} />
          </Row>
          <Row style={{ margin: "30px 0px" }}>
            <Col span={24}>
              <Progress
                strokeWidth={40}
                strokeColor={'rgb(239, 199, 108)'}
                percent={percent / 500 * 100}
                showInfo={false}
                status="active"
              />
              <span
                style={{
                  color: "#2b2b2b",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  fontSize: 18,
                  fontWeight: "bold",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {percent} / {data.total_airdrop}
              </span>
            </Col>
          </Row>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <div style={{ width: "100%", zIndex: 1 }}>
              </div>
                <Image src="blindbox.png" alt="?" className="collection" />
            </Col>
            {/* {(!data.whitelisted || !data.all_whitelist) && !blockchain.aidrop_claimed ? 
              <Col span={24}>
            <a href="https://forms.gle/mj6ha7NP9ruxUokk9" target="_blank">
              <Button
                ref={buttonRef}
                autoFocus
                disabled={loading || blockchain.aidrop_claimed}
                loading={loading}
                onClick={async () => {
                  // if (!data.whitelisted || !data.all_whitelist) {
                  //   return;
                  // };
                  if (blockchain.account) {
                    await claim();
                    return;
                  }

                  dispatch(setModalVisible(true))
                }}
                style={{ width: "100%", height: 50, fontSize: 20 }}
                className="app-button"
              >
                {getName()}
                
              </Button>

            </a>
              </Col>
: */}
            <Col span={24}>
              <Button
                ref={buttonRef}
                autoFocus
                disabled={loading || blockchain.aidrop_claimed}
                loading={loading}
                onClick={async () => {
                  if (!data.whitelisted && !data.all_whitelist) {
                    return;
                  };
                  if (blockchain.account) {
                    await claim();
                    return;
                  }

                  dispatch(setModalVisible(true))
                }}
                style={{ width: "100%", height: 50, fontSize: 20 }}
                className="app-button"
              >
                {getName()}
                
              </Button>
            </Col>
            
            {/* } */}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AirdropMintingPanel;
