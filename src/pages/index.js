import AppLayout from "../components/AppLayout";
import { Row, Col, Button, Divider, Progress, Carousel as AntdCarousel } from "antd";
import Image from "../components/Image";
import Head from "../components/Head";
import Carousel from "react-multi-carousel";
import FAQ from "../components/FAQ";
import React, { useState, useEffect } from "react";
import {
  getCustomStaticProps,
  getCustomServerSideProps,
} from "../model/client";
import { fetchData } from "../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import _ from "lodash";
import axios from "axios";
import defaultStyles from "../core/theme/styles";
import MintingPanel from "../components/MintingPanel";
import AirdropPanel from "../components/AirdropPanel";
import Partners from "../components/Partners";
import Team from "../components/Team";
import RoadMap from "../components/RoadMap";
import CollectionList from "../components/CollectionList";
import { init } from "../redux/blockchain/blockchainActions";



const responsiveHeader = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Home = (props) => {
  const { latest_nfts } = props;

  return (
    <AppLayout fullWidth>
      <Head
        title="Squat Panda"
        description="Squat Panda are 10,000 art pieces with a one-of-a-kind digital
        collection of various NFTs that are stored on the Polygon Blockchain.
        Each one has been meticulously created, hand-picked, and perfectly
        formed."
      />
      <Carousel
        swipeable
        draggable={false}
        showDots
        responsive={responsiveHeader}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay
        autoPlaySpeed={2500}
        keyBoardControl
        // customTransition='all .5'
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      // dotListClass='custom-dot-list-style'
      // itemClass='carousel-item-padding-40-px'
      >
        <div style={{ width: "100%", position: 'relative' }}>
          <Image src="banner.jpg" width={3} height={1} alt="banner" />
        </div>
        <div style={{ width: "100%", position: 'relative' }}>
          <Image src="banner2.jpg" width={3} height={1} alt="banner" className="banner" />
        </div>
      </Carousel>

      <div className="home-section-card">
        <Row
          gutter={[0, 40]}
          justify="center"
          align="middle"
          style={{ minHeight: 300 }}
        >
          <Col xs={22} md={20}>
            <Row gutter={[0, 40]} align="middle" style={{ padding: '0px 0px 40px 0px' }}>
              <Col xs={22} md={12} >
                <span
                  style={{
                    color: "#2b2b2b",
                    fontSize: 'calc(48px + 0.5vw)',
                    lineHeight: 1.2,
                    fontWeight: "600",
                  }}
                >
                  Welcome to <br />Squat Panda
                </span>
              </Col>
              <Col xs={22} md={12}>
                <span style={defaultStyles.subHeader}>
                  Squat Panda is a tribute to the digital collectibles
                  created by anonymous developers, and innovative algorithms.
                  These 10,000 pieces of artworks are inspired by the famous WSB
                  events, recalling the inner artist in you.
                </span>
              </Col>
              {/* <Col xs={24} md={22}>
                <Row gutter={[20, 20]}>
                  <Col>
                    <Link passHref href="/mint">
                      <Button
                        className="app-button"
                        style={{ height: 50, width: 180 }}
                      >
                        Minting Event
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <Link href="/marketplace">
                      <Button
                        className="app-button"
                        style={{
                          height: 50,
                          width: 140,
                          background: "none",
                          color: "#2b2b2b",
                        }}
                      >
                        Market
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col> */}
            </Row>
          </Col>
          
        </Row>

        <Row justify="center">
        <Col span={18}>
        <Row justify="space-around" align="middle" gutter={[20, 40]}>
        <Col xs={12} md={5}>
            {/* <MintingPanel size="small" /> */}
            <div style={{ width: '100%', height: '100%'  }}>
              <Image
                draggable={false}
                alt="icon"
                src="squat-animation.gif"
                // style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}><AirdropPanel /></Col>

        </Row>
        </Col>
        </Row>
      </div>
      <Row justify="center" style={{ paddingTop: 40 }}>
        <Col span={20}>
          <h1
            style={{
              color: "#2b2b2b",
              fontSize: 48,
              fontWeight: "600",
            }}
          >
            Market
          </h1>
        </Col>
      </Row>
      <Row justify="center" style={{ padding: "30px 0px", paddingBottom: 30 }}>
        <Col span={20}>
          <CollectionList collections={latest_nfts} />
        </Col>
      </Row>
      <div style={{ padding: '40px 0px'}}>
      <RoadMap />
      </div>
      <Team />
      <FAQ />
      <Partners />
    </AppLayout>
  );
};


export const getStaticProps = async (context) => {
  return getCustomStaticProps(context, "/", 1);
};

export default Home;
