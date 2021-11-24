import React from 'react'
import { Row, Col } from 'antd';

const Team = () => {
  return (
    <Row style={{ backgroundColor: 'rgb(109, 40, 217)', padding: '30px 0px 50px 0px' }} >
   <Col span={24}>
   <Row>
      <Col span={24}>
        <h1
            style={{
              color: "#fff",
              fontSize: 48,
              // marginTop: 30,
              fontWeight: "600",
              textAlign: 'center'
            }}
          >
            The Team
          </h1>
        </Col>
      </Row>
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={20} md={6}>
        <Row justify="center" gutter={[0, 24]}>
          <Col xs={12} md={20}>
          <img src="/team_1.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Col>
          </Row>
        <Row>
         <Col span={24}>
         <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 10 }}>Tim</h2>
          <p style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
            Co-founder and the technical manager of Squat Panda. Full Stack developer in Web, Mobile and blockchain aspect. I believe blockchain can change the world. 
          </p>
         </Col>
          </Row>
        </Col>
        <Col xs={20} md={6}>
        <Row justify="center" gutter={[0, 24]}>
          <Col xs={12} md={20}>
          <img src="/team_2.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Col>
          </Row>
        <Row>
         <Col span={24}>
         <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 10 }}>Tim</h2>
          <p style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
            Co-founder and the technical manager of Squat Panda. Full Stack developer in Web, Mobile and blockchain aspect. I believe blockchain can change the world. 
          </p>
         </Col>
          </Row>
        </Col>
        <Col xs={20} md={6}>
        <Row justify="center" gutter={[0, 24]}>
          <Col xs={12} md={20}>
          <img src="/team_3.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Col>
          </Row>
        <Row>
         <Col span={24}>
         <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 10 }}>Tim</h2>
          <p style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
            Co-founder and the technical manager of Squat Panda. Full Stack developer in Web, Mobile and blockchain aspect. I believe blockchain can change the world. 
          </p>
         </Col>
          </Row>
        </Col>
        </Row>
   </Col>
    </Row>
  )
}

export default Team