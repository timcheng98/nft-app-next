import AppLayout from "../components/AppLayout";
import Image from "../components/Image";
import { GiftOutline, QuestionCircleOutline } from 'antd-mobile-icons'
import {
  Row, Col, Divider, Button, Input
} from 'antd'
import defaultStyles from "../core/theme/styles";
import { Popover } from "antd-mobile";
import React , {useState}from 'react'
import WalletModal from "../components/WalletModal";

const Mint = () => {
  const [visible, setVisible] = useState(false)
  return (
    <AppLayout>
      <Row style={{ marginTop: 40 }} justify="center">
        <Col span={24} style={defaultStyles.banner}>Mint a Crypto WallStreetBets NFT</Col>

        <Divider />

        <Col xs={24} md={10}>

          <div style={{
            ...defaultStyles.card,
            padding: '30px'
          }}>
            <Row justify="space-between">
              <Col span={4} style={defaultStyles.header}>Mint</Col>
              <Col xs={13} md={7}>
                <Button
                  icon={<GiftOutline style={{ fontSize: 20, marginRight: 5 }}
                  />} style={{ background: 'transparent', color: 'rgb(181, 132, 56)', width: '100%' }} className="app-button">Promotion</Button>
              </Col>
              <Divider style={{ margin: '10px 0px' }} />
            </Row>

            <Row gutter={[0, 20]}>
              <Col span={24}>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.8)', borderRadius: 10, width: '100%', height: '100%', zIndex: 99, position: 'absolute', top: 0, left: 0,
                }} />
                <GiftOutline
                className="scale" style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 99, color: '#fff', fontSize: 60
                }} />
                <div style={{ width: '100%', zIndex: 1 }}>
                  <Image src="icon.gif" alt="?" className="collection" />
                </div>
              </Col>

              <Col span={24}>
                <Input
                  defaultValue={1}
                  className="input-button"
                  placeholder="Mint"
                  style={{
                    height: 54,
                    borderRadius: 15,
                    ...defaultStyles.subHeader
                  }}
                  suffix={
                    <Row align="middle" gutter={[5, 0]}>
                      <Col style={defaultStyles.subHeader}>Max</Col>
                      <Col ><Popover content="Max 20 NFTs can be minted per transaction" mode="dark" placement="topLeft"><QuestionCircleOutline style={{ marginTop: 8 }} /></Popover></Col>
                    </Row>
                  }
                />
              </Col>
              <Col span={24}>
                <div style={{
                  ...defaultStyles.card,
                  padding: '20px 20px'
                }}>
                  <Row justify="space-between" style={{ marginBottom: 10 }}>
                    <Col>Price</Col>
                    <Col span={6}>
                      <Row align="middle" justify="end" gutter={[10, 0]}>
                        <Col xs={10} md={6}><div><Image src="matic.png" alt="matic" className="icon" /></div></Col>
                        <Col>$00</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="space-between" style={{ marginBottom: 10 }}>
                    <Col>Total</Col>
                    <Col span={6}>
                      <Row align="middle" justify="end" gutter={[10, 0]}>
                        <Col  xs={10} md={6}><div><Image src="matic.png" alt="matic" className="icon" /></div></Col>
                        <Col>$00</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>MATIC in wallet</Col>
                    <Col span={6}>
                      <Row align="middle" justify="end" gutter={[10, 0]}>
                        <Col  xs={10} md={6}><div><Image src="matic.png" alt="matic" className="icon" /></div></Col>
                        <Col>$00</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col span={24}>
              <Button
              onClick={() => setVisible(true)}
              style={{ width: '100%', height: 50, fontSize: 20 }} className="app-button">Connect Wallet</Button>
              </Col>
            </Row>
          </div>

        </Col>
      </Row>

<WalletModal visible={visible} setVisible={setVisible} />
    </AppLayout>
  )
}

export default Mint;
