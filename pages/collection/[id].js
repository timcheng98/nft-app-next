import AppLayout from "../../components/AppLayout";
import { SendOutline } from "antd-mobile-icons";

import { Button, Row, Col, Divider } from "antd";
import { LeftOutline } from "antd-mobile-icons";
import Link from "next/link";
import Image from "../../components/Image";
import defaultStyles from "../../core/theme/styles";
import React from "react";

const Collection = () => {
  return (
    <AppLayout fullWidth>
      <Row
        justify='center'
        gutter={[0, 40]}
        style={{ background: "rgb(250, 249, 250)", padding: "40px 0px" }}
      >
        <Col xs={22} md={20}>
          <Link passHref href='/'>
            <Button
              className='app-button'
              style={{ height: 50, width: 120 }}
              icon={<LeftOutline />}
            >
              Go Back
            </Button>
          </Link>
        </Col>

        <Col xs={22} md={20}>
          <Row>
            <Col xs={24} md={12}>
              <Row justify='center' gutter={[0, 30]}>
                <Col xs={24} lg={18}>
                  <Image
                    alt='icon'
                    src='wallstreetbet.png'
                    className='collection'
                  />
                </Col>
                <Col xs={24} md={0}>
                  <Row style={defaultStyles.subHeader} gutter={[0, 30]}>
                    <Col span={24}>Crypto Dogs</Col>
                    <Col span={24}>CryptoDogs#2</Col>
                    <Col span={24}>Owned by</Col>
                    <Col span={24}>Current Price</Col>
                    <Col span={24}>Highest Bid</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div style={defaultStyles.card}>
                    <span style={defaultStyles.header}>Detail</span>
                    <Divider style={{ margin: "10px 0px" }} />
                    <Row
                      style={defaultStyles.subHeader}
                      justify='space-between'
                    >
                      <Col>Rank</Col>
                      <Col>9087</Col>
                    </Row>
                    <Row
                      style={defaultStyles.subHeader}
                      justify='space-between'
                    >
                      <Col>Score</Col>
                      <Col>9087</Col>
                    </Row>
                    <Row
                      style={defaultStyles.subHeader}
                      justify='space-between'
                    >
                      <Col>Rarity</Col>
                      <Col>9087</Col>
                    </Row>
                    <Row
                      style={defaultStyles.subHeader}
                      justify='space-between'
                    >
                      <Col>IPFS</Col>
                      <Col>9087</Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={0} md={12}>
              <Row style={defaultStyles.subHeader} gutter={[0, 30]}>
                <Col span={24}>Crypto Dogs</Col>
                <Col span={24}>CryptoDogs#2</Col>
                <Col span={24}>Owned by</Col>
                <Col span={24}>Current Price</Col>
                <Col span={24}>Highest Bid</Col>
                <Col span={24}>
                  <Button
                    style={{
                      background: "#1E90FF",
                      border: "none",
                      width: 160,
                    }}
                    className='app-button'
                    icon={<SendOutline style={{ margin: "0px 5px" }} />}
                  >
                    Opensea
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col
          xs={22}
          md={20}
          style={{
            ...defaultStyles.card,
            padding: "30px 20px",
          }}
        >
          <span style={defaultStyles.header}>Attributes</span>
          <Divider />
          <Row justify='space-around' align='middle' gutter={[0, 40]}>
            <Col
              xs={20}
              md={7}
              style={{ ...defaultStyles.card, textAlign: "center" }}
            >
              <Row align='middle' justify='center' gutter={[0, 10]}>
                <Col span={24}>BACKGROUNDS</Col>
                <Col span={24}>Roma</Col>
                <Col span={24}>(%12.61)</Col>
              </Row>
            </Col>
            <Col
              xs={20}
              md={7}
              style={{ ...defaultStyles.card, textAlign: "center" }}
            >
              <Row align='middle' justify='center' gutter={[0, 10]}>
                <Col span={24}>BACKGROUNDS</Col>
                <Col span={24}>Roma</Col>
                <Col span={24}>(%12.61)</Col>
              </Row>
            </Col>
            <Col
              xs={20}
              md={7}
              style={{ ...defaultStyles.card, textAlign: "center" }}
            >
              <Row align='middle' justify='center' gutter={[0, 10]}>
                <Col span={24}>BACKGROUNDS</Col>
                <Col span={24}>Roma</Col>
                <Col span={24}>(%12.61)</Col>
              </Row>
            </Col>
            <Col
              xs={20}
              md={7}
              style={{ ...defaultStyles.card, textAlign: "center" }}
            >
              <Row align='middle' justify='center' gutter={[0, 10]}>
                <Col span={24}>BACKGROUNDS</Col>
                <Col span={24}>Roma</Col>
                <Col span={24}>(%12.61)</Col>
              </Row>
            </Col>
            <Col
              xs={20}
              md={7}
              style={{ ...defaultStyles.card, textAlign: "center" }}
            >
              <Row align='middle' justify='center' gutter={[0, 10]}>
                <Col span={24}>BACKGROUNDS</Col>
                <Col span={24}>Roma</Col>
                <Col span={24}>(%12.61)</Col>
              </Row>
            </Col>
            <Col
              xs={20}
              md={7}
              style={{ ...defaultStyles.card, textAlign: "center" }}
            >
              <Row align='middle' justify='center' gutter={[0, 10]}>
                <Col span={24}>BACKGROUNDS</Col>
                <Col span={24}>Roma</Col>
                <Col span={24}>(%12.61)</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Collection;
