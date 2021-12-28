import { Row, Col, Progress, Button } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import defaultStyles from '../core/theme/styles';
import Image from '../components/Image'
import Link from "next/link";
import _ from "lodash"; 
import { useDispatch, useSelector } from "react-redux";

const AirdropPanel = () => {
  const [percent, setPercent] = useState(0);
  const data = useSelector((state) => state.data);

  let interval = useRef();
  let value = useRef(0)
  let stop = useRef(false)

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

  return (
    <Row style={{
      backgroundColor: "#fff",
      borderRadius: 30,
      // padding: "0px 0px 20px 0px",
      border: "2px solid #f5f5f5",
      minHeight: 250,
      boxShadow: '0px 3px 10px rgb(0 0 0 / 0.2)'
    }}>
      <Col
        span={24}
      >
        <Row justify="center" gutter={[0, 30]}>
          <Col
            span={24}
            style={{
              ...defaultStyles.header,
              textAlign: "center",
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              // padding: "0px 30px",
              height: 60,
              backgroundColor: "#f7f7f7",
              //   borderBottom: '3px solid #2b2b2b'
            }}
          >
            <Row
              justify="center"
              style={{ height: 60 }}
              align="middle"
            >
              <Col>Airdrop</Col>
            </Row>
          </Col>
          <Col span={18}>
            <Progress
              strokeWidth={40}
              strokeColor={"rgb(239, 199, 108)"}
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
              {percent} / 500
            </span>
          </Col>
          <Col span={18} style={{ paddingBottom: 10 }}>
            <Link passHref href="/mint">
              <Button
                className="app-button"
                style={{
                  height: 50,
                  fontWeight: "bold",
                  borderBottomWidth: 3,
                  width: "100%",
                  backgroundColor: "#fff",
                  color: "#2b2b2b",
                }}
              >
                <Row gutter={[14, 0]} align="middle">
                  <Col span={12}>Claim NFT</Col>
                </Row>
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AirdropPanel;