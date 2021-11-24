import React from 'react'
import { Row, Col } from 'antd';

const Partners = () => {
  return (
    <>
    <Row>
    <Col span={24}>
      <h1
          style={{
            color: "#2b2b2b",
            fontSize: 48,
            marginTop: 30,
            fontWeight: "600",
            textAlign: 'center'
          }}
        >
          Our Partners
        </h1>
      </Col>
    </Row>
    <Row justify="center" style={{ margin: 10 }}>
      <Col span={6} style={{ background: 'rgb(230, 245, 255)', border: '1px solid #e5e5e5', borderBottomWidth: 5, margin: '20px 20px', borderRadius: 30, padding: 30, height: 120 }}>
        <img style={{ objectFit: 'contain', width: '100%', height: '100%'}}  src="opensea.png" alt="opensea" />
      </Col>
      <Col span={6} style={{ background: 'rgb(230, 245, 255)', border: '1px solid #e5e5e5', borderBottomWidth: 5, margin: '20px 20px', borderRadius: 30, padding: 30, height: 120 }}>
        <img style={{ objectFit: 'contain', width: '100%', height: '100%'}}  src="polygon-logo.svg" alt="polygon network" />
      </Col>

    </Row>
    <Row justify="center" style={{ margin: 10}}>
    <Col span={6} style={{ background: 'rgb(230, 245, 255)', border: '1px solid #e5e5e5', borderBottomWidth: 5, margin: '20px 20px', borderRadius: 30, padding: 30, height: 120 }}>
        <img style={{ objectFit: 'contain', width: '100%', height: '100%'}}  src="IPFS_logo.png" alt="ipfs" />
      </Col>
      <Col span={6} style={{ background: 'rgb(230, 245, 255)', border: '1px solid #e5e5e5', borderBottomWidth: 5, margin: '20px 20px', borderRadius: 30, padding: 30, height: 120 }}>
        <img style={{ objectFit: 'contain', width: '100%', height: '100%'}}  src="wwf.png" alt="wwf" />
      </Col>
    </Row>
    </>
  )
}

export default Partners