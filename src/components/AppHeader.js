import { Row, Col, Button } from "antd";
import React, { useEffect } from "react";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { setModalVisible } from "../redux/blockchain/blockchainActions";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const AppHeader = () => {
  const dispatch = useDispatch()
  const blockchain = useSelector((state) => state.blockchain);

  return (
    <Row
      className="header"
      justify="center"
      style={{
        padding: "0px",
        minHeight: 60,
        zIndex: 9999,
        backgroundColor: "#fff",
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
      }}
    >
      <Col xs={22} md={22} style={{ backgroundColo: "#fff" }}>
        <Row
          justify="space-between"
          align="middle"
          style={{
            minHeight: "inherit",
            padding: "10x 0px",
            backgroundColor: "#fff",
          }}
        >
          <Link passHref href="/">
            <Col xs={3} sm={4} md={8} style={{ cursor: "pointer" }}>
              <div style={{ width: 70, height: '100%', padding: '5px' }}>
                <Image
                  draggable={false}
                  alt="icon"
                  src="logo.png"
                  // style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="panda-icon"
                />
              </div>
            </Col>
          </Link>
          <Col xs={0} md={5} lg={4}>
            {" "}
            {/* <p
              style={{
                ...defaultStyles.subHeader,
                fontSize: 24,
                textAlign: "center",
                margin: 0,
              }}
            >
              Squat Panda
            </p> */}
            <Link href="/">
              <div className="logo" style={{ width: '100%', position: 'absolute', bottom: 13, zIndex: 99, margin: 'auto', height: '100%', padding: '5px', cursor: 'pointer' }}>
                <Image
                  draggable={false}
                  alt="icon"
                  src="brand-logo.png"
                  width={2.5}
                  height={1}
                  // style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="panda-icon"
                />
              </div></Link>
          </Col>
          <Col md={8}>
            <Row justify="end">
              <Col>
                <Button
                  onClick={() => dispatch(setModalVisible(true))}
                  icon={<WalletIcon />}
                  className="app-button"
                >
                  <span
                    style={{
                      padding: "0px 10px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: 150,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {blockchain.account ? (
                      <span>{blockchain.account}</span>
                    ) : (
                      "Connect Wallet"
                    )}
                  </span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const WalletIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24px"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      className="sc-bdfBQB fkooRD"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z"
      ></path>
    </svg>
  );
};

export default AppHeader;
