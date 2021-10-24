import AppLayout from "../components/AppLayout";
import Image from "../components/Image";
import { GiftOutline, QuestionCircleOutline } from "antd-mobile-icons";
import {
  Row,
  Col,
  Divider,
  Button,
  Input,
  InputNumber,
  notification,
} from "antd";
import defaultStyles from "../core/theme/styles";
import { Popover } from "antd-mobile";
import React, { useState, useEffect } from "react";
import WalletModal from "../components/WalletModal";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { fetchData } from "../redux/data/dataActions";

const Mint = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    setLoading(true);
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      setLoading(false);
    }
    setLoading(false);
  }, [blockchain.smartContract, dispatch]);

  const mint = async (count) => {
    if (!blockchain.account) {
      return notification.warning({
        message: "please connect metamask wallet",
      });
    }

    setLoading(true);

    // const amount = data.price * amount; // Willing to send 2 ethers
    const amountToSend = blockchain.web3.utils.toWei(
      _.toString(data.price * amount),
      "ether"
    ); // Convert to wei value
    blockchain.smartContract.methods
      .mint(amount)
      .send({ from: blockchain.account, value: amountToSend })
      .once("error", (err) => {
        console.log(err);
        setLoading(false);
        notification.error({
          message: "Error",
        });
      })
      .then((receipt) => {
        console.log(receipt);
        setLoading(false);
        dispatch(fetchData(blockchain.account));
        notification.success({
          message: "Successfully minting your NFT",
        });
      });
  };

  return (
    <AppLayout>
      <Row style={{ marginTop: 40 }}>
        <Col span={24} style={defaultStyles.banner}>
          Mint a Crypto WallStreetBets NFT
        </Col>
        <Col xs={22} md={18} style={defaultStyles.subBody}>
          Crypto WallStreetBets are 9630 art pieces with a one-of-a-kind digital
          collection of various NFTs that are stored on the Polygon Blockchain.
          Each one has been meticulously created, hand-picked, and perfectly
          formed.
        </Col>
      </Row>
      <Row justify='center'>
        <Divider />

        <Col xs={24} md={10}>
          <div
            style={{
              ...defaultStyles.card,
              padding: "30px",
            }}
          >
            <Row justify='space-between'>
              <Col span={4} style={defaultStyles.header}>
                Mint
              </Col>
              <Col xs={13} md={7}>
                <Button
                  icon={
                    <GiftOutline style={{ fontSize: 20, marginRight: 5 }} />
                  }
                  style={{
                    background: "transparent",
                    color: "rgb(181, 132, 56)",
                    width: "100%",
                  }}
                  className='app-button'
                >
                  Promotion
                </Button>
              </Col>
              <Divider style={{ margin: "10px 0px" }} />
            </Row>

            <Row gutter={[0, 20]}>
              <Col span={24}>
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.8)",
                    borderRadius: 10,
                    width: "100%",
                    height: "100%",
                    zIndex: 99,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                <GiftOutline
                  className='scale'
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 99,
                    color: "#fff",
                    fontSize: 60,
                  }}
                />
                <div style={{ width: "100%", zIndex: 1 }}>
                  <Image src='icon.gif' alt='?' className='collection' />
                </div>
              </Col>

              <Col span={24}>
                <Input
                  value={blockchain.account ? _.toInteger(amount) : undefined}
                  // defaultValue={1}
                  max={20}
                  disabled={!blockchain.account}
                  className='input-button'
                  placeholder='Mint'
                  onChange={(e) => {
                    // if (!_.toInteger(e.target.value)) return setAmount(0);
                    if (e.target.value > 20) return setAmount(20);
                    setAmount(_.toInteger(e.target.value));
                  }}
                  style={{
                    height: 54,
                    borderRadius: 15,
                    ...defaultStyles.subHeader,
                  }}
                  suffix={
                    <Row align='middle' gutter={[5, 0]}>
                      <Col
                        onClick={() => setAmount(20)}
                        style={{
                          ...defaultStyles.subHeader,
                          cursor: "pointer",
                        }}
                      >
                        Max
                      </Col>
                      <Col>
                        <Popover
                          content='Max 20 NFTs can be minted per transaction'
                          mode='dark'
                          placement='topLeft'
                        >
                          <QuestionCircleOutline style={{ marginTop: 8 }} />
                        </Popover>
                      </Col>
                    </Row>
                  }
                />
              </Col>
              <Col span={24}>
                <div
                  style={{
                    ...defaultStyles.card,
                    padding: "20px 20px",
                  }}
                >
                  <Row justify='center'>
                    <Col
                      style={{
                        ...defaultStyles.subHeader,
                        textAlign: "center",
                      }}
                    >
                      50% OFF
                    </Col>
                  </Row>
                  <Row justify='space-between' style={{ marginBottom: 10 }}>
                    <Col>Price</Col>
                    <Col>
                      <Row align='middle' justify='end' gutter={[10, 0]}>
                        <Col>
                          <div>
                            <img
                              style={{ width: 20, height: 20 }}
                              src='/matic.png'
                              alt='matic'
                              className='icon'
                            />
                          </div>
                        </Col>

                        <Col>{`${
                          blockchain.account ? data.price : "N/A"
                        }`}</Col>
                        {blockchain.account && (
                          <Col>
                            <span
                              style={{
                                textDecoration: "line-through",
                                fontSize: 12,
                              }}
                            >{`${data.price * 2}`}</span>
                          </Col>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row justify='space-between' style={{ marginBottom: 10 }}>
                    <Col>Total</Col>
                    <Col>
                      <Row align='middle' justify='end' gutter={[10, 0]}>
                        <Col>
                          <div>
                            <img
                              style={{ width: 20, height: 20 }}
                              src='/matic.png'
                              alt='matic'
                              className='icon'
                            />
                          </div>
                        </Col>
                        <Col>{`${
                          blockchain.account
                            ? (amount ? amount : 0) * data.price
                            : "N/A"
                        }`}</Col>
                        {blockchain.account && (
                          <Col>
                            <span
                              style={{
                                textDecoration: "line-through",
                                fontSize: 12,
                              }}
                            >{`${
                              (amount ? amount : 0) * data.price * 2
                            }`}</span>
                          </Col>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row justify='space-between'>
                    <Col>MATIC in wallet</Col>
                    <Col>
                      <Row align='middle' justify='end' gutter={[10, 0]}>
                        <Col>
                          <div>
                            <img
                              style={{ width: 20, height: 20 }}
                              src='/matic.png'
                              alt='matic'
                              className='icon'
                            />
                          </div>
                        </Col>
                        <Col>{`${
                          blockchain.account ? blockchain.balance : "N/A"
                        }`}</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col span={24}>
                <Button
                  disabled={loading}
                  onClick={async () => {
                    if (blockchain.account) {
                      if (
                        blockchain.balance < amount * data.price ||
                        amount * data.price === 0
                      )
                        return notification.warning({
                          message: "Insufficient MATIC in Wallet",
                        });

                      await mint();
                      return;
                    }

                    setVisible(true);
                  }}
                  style={{ width: "100%", height: 50, fontSize: 20 }}
                  className='app-button'
                >
                  {blockchain.account ? "Mint" : "Connect Wallet"}
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <WalletModal visible={visible} setVisible={setVisible} />
    </AppLayout>
  );
};

export default Mint;
