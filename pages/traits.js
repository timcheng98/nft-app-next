import { Col, Row, Collapse, List, Divider } from "antd";
import AppLayout from "../components/AppLayout";
import _ from "lodash";
import defaultStyles from "../core/theme/styles";
const { Panel } = Collapse;

const rarity = {
  background: {
    name: "Backgroud",
    rarities: [
      {
        type: "all",
        count: 9630 / 15,
        name: "Bitcoin",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Coin",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Diamond Shine",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Future",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Golden Shine",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Magic Circle",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Morden Honeycomb",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Psychedelic",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Sun Shine",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Blue",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Green",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Pink",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Red",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "White",
        rate: _.round(642 / 9630, 2),
      },
      {
        type: "all",
        count: 9630 / 15,
        name: "Yellow",
        rate: _.round(642 / 9630, 2),
      },
    ],
  },
  clothing: {
    count: 9630 / 15,
    name: "Clothing",
    rarities: [
      {
        type: "Super Rare",
        count: 15,
        name: "Black Suit",
        rate: _.round(15 / 9630, 6),
      },
      {
        type: "Rare",
        count: 120,
        name: "Brown Jacket",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Rare",
        count: 120,
        name: "Nude",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Casual Suit",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Hoddie",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Stripe",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "White Polo",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "White Shirt",
        rate: _.round(9376 / 9630 / 5, 2),
      },
    ],
  },
  glasses: {
    name: "Glasses",
    rarities: [
      {
        type: "Super Rare",
        count: 15,
        name: "Black Sun Glasses",
        rate: _.round(15 / 9630, 6),
      },
      {
        type: "Rare",
        count: 120,
        name: "Bitcoin Glasses",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Rare",
        count: 120,
        name: "Meme Pixel Sun Glasses",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Circle Glasses",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Hexagonal Glasses",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Pixel Glasses",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Sui Circle Sun Glasses",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Thick-Rimmed Glasses",
        rate: _.round(9376 / 9630 / 5, 2),
      },
    ],
  },
  hair: {
    name: "Hair",
    rarities: [
      {
        type: "Super Rare",
        count: 15,
        name: "Modern Undercut",
        rate: _.round(15 / 9630, 6),
      },
      {
        type: "Rare",
        count: 120,
        name: "Bald",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Rare",
        count: 120,
        name: "Middle Part Hair",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Short Hair",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Disconnected Undercut",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Man Bun",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Medium Undercut",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Pompadour Undercut",
        rate: _.round(9376 / 9630 / 5, 2),
      },
    ],
  },
  mouth: {
    name: "Mouth",
    rarities: [
      {
        type: "Super Rare",
        count: 15,
        name: "Straight Face",
        rate: _.round(15 / 9630, 6),
      },
      {
        type: "Rare",
        count: 120,
        name: "Bearded Face with Togue Out",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Rare",
        count: 120,
        name: "Smoke a Cigar",
        rate: _.round(240 / 9630 / 2, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Dark Blue Mask",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Laugh",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Scared",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Smile",
        rate: _.round(9376 / 9630 / 5, 2),
      },
      {
        type: "Original",
        count: 9376 / 5,
        name: "Tongue Out",
        rate: _.round(9376 / 9630 / 5, 2),
      },
    ],
  },
};

const Traits = () => {
  return (
    <AppLayout>
      <Row style={{ marginTop: 40 }}>
        <Col span={24} style={defaultStyles.banner}>
          Traites Distribution
        </Col>
        <Col xs={22} md={18} style={defaultStyles.subBody}>
          Crypto WallStreetBets are 9630 art pieces with a one-of-a-kind digital
          collection of various NFTs that are stored on the Polygon Blockchain.
          Each one has been meticulously created, hand-picked, and perfectly
          formed.
        </Col>
      </Row>
      <Divider />
      <Collapse
        expandIconPosition="right"
        defaultActiveKey={["Background"]}
        ghost
      >
        {_.map(rarity, (item) => {
          return (
            <Panel
              header={
                <span style={{ ...defaultStyles.subHeader, fontSize: 20 }}>
                  {item.name}
                </span>
              }
              key={item.name}
              style={{
                border: "1px solid #000",
                ...defaultStyles.card,
                padding: "0px 10px",
                minHeight: 30,
                background:
                  "linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%)",
                // borderRadius: "24px 24px 0px 0px",
                marginBottom: 30,
              }}
            >
              <Divider style={{ margin: "0px 0px 20px 0px" }} />

              <Row justify="space-between">
                <Col xs={0} md={18} style={{ ...defaultStyles.header, fontSize: 16 }}>
                  Name
                </Col>
                <Col xs={0} md={6}>
                  <Row justify="space-between" gutter={[0, 0]}>
                    <Col
                      span={8}
                      style={{
                        ...defaultStyles.header,
                        textAlign: "end",
                        fontSize: 16,
                      }}
                    >
                      Type
                    </Col>
                    <Col
                      span={8}
                      style={{
                        ...defaultStyles.header,
                        textAlign: "end",
                        fontSize: 16,
                      }}
                    >
                      Count
                    </Col>
                    <Col
                      span={8}
                      style={{
                        ...defaultStyles.header,
                        textAlign: "end",
                        fontSize: 16,
                      }}
                    >
                      Rarity
                    </Col>
                  </Row>
                </Col>
              </Row>
              <List
                itemLayout="vertical"
                dataSource={item.rarities}
                rowKey="name"
                renderItem={(item) => (
                  <List.Item>
                    <Row justify="space-between">
                      <Col xs={0} md={18} style={defaultStyles.subHeader}>
                        {item.name}
                      </Col>
                      <Col xs={0} md={6}>
                        <Row justify="space-between" gutter={[0, 0]}>
                          <Col
                            span={8}
                            style={{
                              ...defaultStyles.subHeader,
                              textAlign: "start",
                            }}
                          >
                            {item.type}
                          </Col>
                          <Col
                            span={8}
                            style={{
                              ...defaultStyles.subHeader,
                              textAlign: "start",
                            }}
                          >
                            {_.floor(item.count)}
                          </Col>
                          <Col
                            span={8}
                            style={{
                              ...defaultStyles.subHeader,
                              textAlign: "start",
                            }}
                          >
                            {_.round(item.rate * 100, 2).toFixed(2)}%
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24} md={0} style={defaultStyles.subHeader}>
                        <span style={{ ...defaultStyles.header, fontSize: 12 }}>
                          Name
                        </span>{" "}
                        <br /> {item.name}
                      </Col>
                      <Col xs={24} md={0}>
                        <Row justify="space-between" gutter={[0, 0]}>
                          <Col
                            span={24}
                            style={{
                              ...defaultStyles.subHeader,
                              textAlign: "start",
                            }}
                          >
                            <span
                              style={{ ...defaultStyles.header, fontSize: 12 }}
                            >
                              Type
                            </span>{" "}
                            <br /> {item.type}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              ...defaultStyles.subHeader,
                              textAlign: "start",
                            }}
                          >
                            <span
                              style={{ ...defaultStyles.header, fontSize: 12 }}
                            >
                              Count
                            </span>{" "}
                            <br /> {_.floor(item.count)}
                          </Col>
                          <Col
                            span={24}
                            style={{
                              ...defaultStyles.subHeader,
                              textAlign: "start",
                            }}
                          >
                            <span
                              style={{ ...defaultStyles.header, fontSize: 12 }}
                            >
                              Rarity
                            </span>{" "}
                            <br /> {_.round(item.rate * 100, 2).toFixed(2)}%
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              />
            </Panel>
          );
        })}
      </Collapse>
    </AppLayout>
  );
};

export default Traits;
