import AppLayout from "../components/AppLayout";
import { Row, Col, Divider, Input, Button } from "antd";
import defaultStyles from "../core/theme/styles";
import { Toast } from "antd-mobile";
import Link from "next/link";

import { CopyOutlined, LogoutOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import { connect, disconnect } from "../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import WalletModal from "../components/WalletModal";

const Account = () => {
  const blockchain = useSelector((state) => state.blockchain);
  const [visible, setVisible] = useState(false);

  return (
    <AppLayout>
      <Row justify='center' style={{ marginTop: 30 }}>
        <Col span={20}>
          <Row>
            <Col span={24} style={defaultStyles.banner}>
              Collection
            </Col>
            <Col span={24} style={defaultStyles.subHeader}>
              Your profile's information and collection.
            </Col>
            <Divider />
          </Row>
          {blockchain.account ? (
            <Panel />
          ) : (
            <Row justify='center'>
              <Col xs={24} md={12}>
                <Button
                  onClick={() => setVisible(true)}
                  block
                  style={{ height: 60, fontSize: 20 }}
                  className='app-button'
                >
                  Connect Wallet
                </Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
      <WalletModal visible={visible} setVisible={setVisible} />
    </AppLayout>
  );
};

const Panel = () => {
  const blockchain = useSelector((state) => state.blockchain);

  return (
    <Row align='middle'>
      <Col span={24}>
        <div style={defaultStyles.card}>
          <Row justify='space-between' align='middle'>
            <Col span={11}>
              <Row gutter={[0, 15]}>
                <Col span={24} className='account-address'>
                  <Input
                    disabled
                    style={{
                      background: "rgb(246, 246, 246)",
                      border: "none",
                      color: "rgb(40, 13, 95)",
                      fontSize: 16,
                      fontWeight: "600",
                      borderRadius: 15,
                      height: 50,
                    }}
                    value={blockchain.account}
                    suffix={
                      <CopyOutlined
                        style={{
                          zIndex: 99,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          Toast.show({
                            icon: "success",
                            content: "Copied",
                          });

                          navigator.clipboard.writeText(blockchain.account);
                        }}
                      />
                    }
                  />
                </Col>
                <Col span={24}>
                  <Row align='middle' justify='space-between'>
                    <Col span={16}>
                      <div
                        style={{
                          background: "rgb(246, 246, 246)",
                          border: "none",
                          color: "rgb(40, 13, 95)",
                          fontSize: 16,
                          fontWeight: "600",
                          borderRadius: 15,
                          height: 50,
                          padding: "10px 20px",
                        }}
                      >
                        All withdrawable: {blockchain.balance} MATIC
                      </div>
                    </Col>
                    <Col span={7}>
                      <Link href='/mint'>
                        <Button
                          block
                          className='app-button'
                          style={{ height: 50 }}
                        >
                          Mint
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={11}>
              <div style={defaultStyles.card}>
                <p style={defaultStyles.subHeader}>Your NFTs</p>
                <Row justify='space-between'>
                  <Col
                    span={7}
                    style={{
                      background: "rgb(246, 246, 246)",
                      border: "none",
                      color: "rgb(40, 13, 95)",
                      fontSize: 14,
                      fontWeight: "600",
                      borderRadius: 15,
                      // height: 50,
                      textAlign: "center",
                      padding: "10px 20px",
                    }}
                  >
                    Super Rare <br />0
                  </Col>
                  <Col
                    span={7}
                    style={{
                      background: "rgb(246, 246, 246)",
                      border: "none",
                      color: "rgb(40, 13, 95)",
                      fontSize: 14,
                      fontWeight: "600",
                      borderRadius: 15,
                      // height: 50,
                      textAlign: "center",
                      padding: "10px 20px",
                    }}
                  >
                    Rare <br />0
                  </Col>
                  <Col
                    span={7}
                    style={{
                      background: "rgb(246, 246, 246)",
                      border: "none",
                      color: "rgb(40, 13, 95)",
                      fontSize: 14,
                      fontWeight: "600",
                      borderRadius: 15,
                      // height: 50,
                      textAlign: "center",
                      padding: "10px 20px",
                    }}
                  >
                    Original <br />0
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col
        span={24}
        style={{
          ...defaultStyles.subHeader,
          textAlign: "center",
          marginTop: 40,
          fontSize: 24,
        }}
      >
        You have no NFTs
      </Col>
    </Row>
  );
};

export default Account;
