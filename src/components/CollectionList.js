import { Row, Col, Button, Divider, Progress } from "antd";
import Image from "../components/Image";
import Carousel from "react-multi-carousel";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import _ from "lodash";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CollectionItem = ({ item, xs = 22, md = 20, containerStyle = {} }) => {
  // if (!item) return null;
  let rarity = () => {
    if (item <= 15) return "Super Rare";
    if (item <= 254) return "Rare";
    return "Normal";
  };
  const getScore = () => {
    let score = 500; // base (Background)
    if (item <= 15) return 4 * 1500 * 2 + score;
    if (item <= 254) return 4 * 1000 * 2 + score;
    return 4 * 500 * 2 + score;
  };

  return (
    <Col xs={xs} md={md}>
      <Link href={`/collection/${item}`}>
        <div
          className="card-hover"
          style={{
            cursor: "pointer",
            transition: "opacity 0.3s ease-in-out",
            border: "1px solid #e5e5e5",
            borderBottomWidth: 3,
            height: "100%",
            width: "100%",
            borderRadius: 18,
            background: "#fff",
            ...containerStyle,
          }}
        >
          <Image
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
            }}
            src={`${item}`}
            alt="wsb"
            external
            className="collection"
          />
          <div style={{ padding: "15px 10px" }}>
            <Row
              justify="space-between"
              align="middle"
              style={{ marginBottom: 10 }}
            >
              <Col style={{ fontSize: 12, fontWeight: 500 }}>
                Squat Panda
              </Col>
              <Col style={{ color: "#2b2b2b", fontWeight: "500" }}>
                {rarity()}
              </Col>
            </Row>
            <Row justify="space-between">
              <Col style={{ color: "#2b2b2b", fontWeight: "600" }}>
                Squat Panda #{item}
              </Col>
              <Col style={{ fontWeight: "700", color: "gray" }}>
                Score {getScore()}
              </Col>
            </Row>
          </div>
        </div>
      </Link>
    </Col>
  );
};

const CollectionCarousel = ({ collections }) => {
  return (
    <Carousel
      swipeable
      draggable
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
    >
      {_.map(collections, (item) => {
        return <CollectionItem key={item} item={item} />;
      })}
    </Carousel>
  );
};

export default CollectionCarousel;

