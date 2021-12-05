import AppLayout from '../components/AppLayout';
import {
	Row,
	Col,
	Button,
	Divider,
	Progress,
	Carousel as AntdCarousel,
	Grid,
} from 'antd';
import Image from '../components/Image';
import Head from '../components/Head';
import Carousel from 'react-multi-carousel';
import FAQ from '../components/FAQ';
import React, { useState, useEffect } from 'react';
import {
	getCustomStaticProps,
	getCustomServerSideProps,
} from '../model/client';
import { fetchData, fetchDataSuccess, showAnimation } from '../redux/data/dataActions';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import _ from 'lodash';
import axios from 'axios';
import defaultStyles from '../core/theme/styles';
import MintingPanel from '../components/MintingPanel';
import AirdropPanel from '../components/AirdropPanel';
import Partners from '../components/Partners';
import Team from '../components/Team';
import RoadMap from '../components/RoadMap';
import CollectionList from '../components/CollectionList';
import { init } from '../redux/blockchain/blockchainActions';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const { useBreakpoint } = Grid;

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
	const screens = useBreakpoint()
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);
	const conRef = React.useRef();
	const targetRef = React.useRef();
	const { latest_nfts } = props;
	const displayRef = React.useRef(false)
	const [show, setShow] = useState(false)


	// wait until DOM has been rendered

	useEffect(() => {
		dispatch(
			fetchDataSuccess({
				name: props.name,
				total: _.toInteger(props.total),
				price: _.toInteger(props.amountToSend),
				airdrop: _.toInteger(props.airdrop),
				total_airdrop: _.toInteger(props.total_airdrop),
			})
		);
		// let tl = gsap.timeline();

		// tl.addLabel('start');
		// // tl.from('.carousel-container', { opacity: 0, duration: 3 })
		// tl.from('.title', { opacity: 0, x: -300, duration: 0.5 }, 0);
		// tl.from('.sub-title', { opacity: 0, x: 400, duration: 1 }, 0);
		if (!data.showAnimation) return conRef.current.remove();
		let tl2 = gsap.timeline({
			autoRemoveChildren: true,
		});
		tl2
			.addLabel('start')
			.to('.scroll', { opacity: 0 })
			.from('.squat-animation', { opacity: 0.5, scale: 0, duration: 1,  })
			.to('.squat-animation', { opacity: 0, scale: 1, duration: 1 })
			.to('.squat-animation', { opacity: 1, scale: 0.8, duration: 1 })
			.from('.scroll', { opacity: 1, y: 400, duration: 1 })
			.to('.squat-animation', { duration: 2 })
			// .from('.scroll', { duration: 2 })
			// .from('.scroll', { y: -200, duration: 2 })
			.eventCallback('onComplete', () => {
				conRef.current.remove();
				displayRef.current = true
				dispatch(showAnimation(false))
        let tl = gsap.timeline();
        tl.addLabel('start');
				// targetRef.current.style.display = 'block'
        // tl.from('.carousel-container', { opacity: 0, duration: 3 })
        tl.from('.title', { opacity: 0, x: '-5%', duration: 0.5 }, 0);
        tl.from('.sub-title', { opacity: 0, x: '5%', duration: 1 }, 0);
				// conRef.current.style.display = 'none'
				// targetRef.current.scrollIntoView()
			})
			// .from('.title', { opacity: 0, x: -300, duration: 0.5 }, 0)
			// .from('.sub-title', { opacity: 0, x: 400, duration: 1 }, 0);
		// tl2.to('.container', { display: 'none' });
		// tl2.clear();
	}, []);

	useEffect(() => {}, []);
	return (
		<AppLayout fullWidth display={!data.showAnimation}>
			<Head
				title='Squat Panda'
				description='Squat Panda are 10,000 art pieces with a one-of-a-kind digital
        collection of various NFTs that are stored on the Polygon Blockchain.
        Each one has been meticulously created, hand-picked, and perfectly
        formed.'
			/>
			<Row justify='center' ref={conRef} className='' style={{ height: '100vh', background: 'rgb(243, 239, 255)' }}>
				<Col span={18}>
					<Row justify='center' align='middle' style={{ height: '90vh'}} gutter={[20, 40]}>
						<Col xs={24} md={24}>
							{/* <MintingPanel size="small" /> */}
							<Row justify='center'>
								<Col xs={20} md={6}>
									{' '}
									<div style={{ width: '100%', height: '100%' }}>
										<Image
											className='squat-animation'
											draggable={false}
											alt='icon'
											src='squat-animation.gif'
											// style={{ width: "100%", height: "100%", objectFit: "cover" }}
										/>
													<Row justify="center" >
<Col span={24}>								<img className="scroll" src="/brand-logo.png" style={{width: '100%'}} /></Col>
							</Row>
									</div>
									
								</Col>
							</Row>
				
						</Col>
					</Row>
				</Col>
			</Row>
			{!data.showAnimation &&
			<div >
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
				containerClass='carousel-container'
				removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
				// deviceType={this.props.deviceType}
				// dotListClass='custom-dot-list-style'
				// itemClass='carousel-item-padding-40-px'
			>
				<div style={{ width: '100%', position: 'relative' }}>
					<Image
						src='banner.jpg'
						width={3}
						height={1}
						alt='banner'
						className='banner'
					/>
				</div>
				<div style={{ width: '100%', position: 'relative' }}>
					<Image
						src='banner2.jpg'
						width={3}
						height={1}
						alt='banner'
						className='banner'
					/>
				</div>
			</Carousel>

			<div className='home-section-card'>
				<Row
					gutter={[0, 40]}
					justify='center'
					// align='middle'
					style={{ minHeight: 300 }}
				>
					<Col xs={22} md={20}>
						<Row
							gutter={[0, 40]}
							align='middle'
							style={{ padding: '0px 0px 40px 0px' }}
						>
							<Col xs={22} md={12}>
								<div
									className='title'
									style={{
										color: '#2b2b2b',
										fontSize: 'calc(48px + 0.5vw)',
										lineHeight: 1.2,
										fontWeight: '600',
									}}
								>
									Welcome to <br />
									Squat Panda
								</div>
							</Col>
							<Col xs={22} md={12}>
								<div className='sub-title' style={defaultStyles.subHeader}>
									Squat Panda is a tribute to the digital collectibles created
									by anonymous developers, and innovative algorithms. These
									10,000 pieces of artworks are inspired by the famous WSB
									events, recalling the inner artist in you.
								</div>
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

				<Row justify='center'>
					<Col span={18}>
						<Row justify='space-around' align='middle' gutter={[20, 40]}>
							<Col xs={24} md={24}>
								{/* <MintingPanel size="small" /> */}
								<Row justify='center'>
									<Col xs={12} md={5}>
										{' '}
										<div style={{ width: '100%', height: '100%' }}>
											<Image
												draggable={false}
												alt='icon'
												src='squat-animation.gif'
												// style={{ width: "100%", height: "100%", objectFit: "cover" }}
											/>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row justify='center'>
					<Col xs={20} md={7}>
						<AirdropPanel />
					</Col>
				</Row>
			</div>
			<Row
				justify='center'
				align='middle'
				style={{ paddingTop: 40, textAlign: 'center', minHeight: 500 }}
			>
				<Col
					xs={22}
					md={14}
					style={{
						border: '8px dashed #2b2b2b',
						borderRadius: 50,
						padding: 30,
						minHeight: 200,
					}}
				>
					<Row justify='center'>
						<Col xs={7} md={4}>
							<div>
								<Image src='logo.png' alt='logo' />
							</div>
						</Col>
					</Row>
					<Row justify='center' align='middle' style={{ minHeight: 200 }}>
						<Col span={24}>
							<h1
								style={{
									color: '#2b2b2b',
									fontSize: screens.xs ? 28 : 32,
									fontWeight: '600',
								}}
							>
								{data.total} / 10,000
							</h1>
							<h1
								style={{
									color: '#2b2b2b',
									fontSize: screens.xs ? 24 : 28,
									fontWeight: '600',
								}}
							>
								Contract Address
							</h1>
							<div
								style={{
									color: '#2b2b2b',
									fontSize: screens.xs ? 16 : 22,
									fontWeight: '600',
									wordBreak: 'break-word',
								}}
							>
								{process.env.NETX_PUBLIC_CONTRACT_ADDRESS}
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row justify='center' style={{ paddingTop: 40 }}>
				<Col span={20}>
					<h1
						style={{
							color: '#2b2b2b',
							fontSize: 48,
							fontWeight: '600',
						}}
					>
						Market
					</h1>
				</Col>
			</Row>
			<Row justify='center' style={{ padding: '30px 0px', paddingBottom: 30 }}>
				<Col span={20}>
					<CollectionList collections={latest_nfts} />
				</Col>
			</Row>
			<div className="roadmap" style={{ padding: '40px 0px' }}>
				<RoadMap />
			</div>
			<Team />
			<FAQ />
			<Partners />
			</div>
}
		</AppLayout>
	);
};

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/', 1);
};

export default Home;
