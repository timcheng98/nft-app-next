import { Row, Col, Modal, Divider, Button, notification } from 'antd'
import { CloseOutline } from 'antd-mobile-icons'
import defaultStyles from '../core/theme/styles'
import Image from './Image'
import React, { useState } from 'react'

const WalletModal = ({
  setVisible,
  visible
}) => {
  return (
    <Modal
      // forceRender
      visible={visible}
      closable={false}
      footer={null}
      centered
      maskStyle={{
        background: 'rgba(69, 42, 122, 0.5)',
      }}
      onCancel={() => setVisible(false)}
      bodyStyle={{ minHeight: 350 }}
      className="app-modal"
    >
      <Row justify="space-between" align="middle" style={{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: '0px 30px',
        marginBottom: 30,
        height: 70, background: 'rgb(229, 253, 255)'
      }}>
        <Col style={defaultStyles.subHeader}>
          Connect Wallet
        </Col>
        <Col>
          <CloseOutline style={defaultStyles.subHeader} />
        </Col>
      </Row>
      <Row
        justify="center"
        className="hover"
        style={{

          padding: '0px 30px',

        }}
      >
        <Col>
          <div>
            <Image src="metamask.svg" />
          </div>
          Metamask
        </Col>
      </Row>
      <Divider />
      <Row
        gutter={[0, 20]}
        style={{
          padding: '0px 20px',
          textAlign: 'center'
        }}
      >
        <Col span={24} style={defaultStyles.subBody}>
          Haven't got a crypto wallet yet?
        </Col>
        <Col span={24}>
          <Button 

          style={

            {
              ...defaultStyles.subBody,
              color: '#fff',
              height: 50,
              background: 'rgb(122, 110, 170)', width: '100%', border: 'none'
            }} className="app-button">Learn How to Connect</Button>
        </Col>
      </Row>
    </Modal>
  )
}

export default WalletModal;
