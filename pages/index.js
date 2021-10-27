import AppLayout from '../components/AppLayout';
import { Row, Col, Button, Divider } from 'antd';
import Image from '../components/Image';
import Head from '../components/Head';
import Carousel from 'react-multi-carousel';
import FAQ from '../components/FAQ';
import React, { useState, useEffect } from 'react';
import {
	getCustomStaticProps,
	getCustomServerSideProps,
} from '../model/client';
import { fetchData } from '../redux/data/dataActions';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import _ from 'lodash';
import axios from 'axios';
import defaultStyles from '../core/theme/styles';
import MintingPanel from '../components/MintingPanel';

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
		items: 2,
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
			<Head title="Home | Crypto WallStreetBets NFT" description="Crypto WallStreetBets NFT - Information the Crypto WallStreetBets NFT and show the latest minted collections" />
			<div className='home-section-card'>
				<Row
					gutter={[0, 40]}
					justify='center'
					align='middle'
					style={{ minHeight: 300 }}
				>
					<Col xs={22} md={14}>
						<Row gutter={[0, 10]}>
							<Col span={22}>
								<span
									style={{
										color: 'rgb(181, 132, 56)',
										fontSize: 48,
										fontWeight: '600',
									}}
								>
									Crypto WallStreetBets
								</span>
							</Col>
							<Col span={20} style={{}}>
								<span style={defaultStyles.subHeader}>
									Crypto WallStreetBets is a tribute to the digital collectibles
									created by anonymous developers, and innovative algorithms.
									These 9630 pieces of artworks are inspired by the famous WSB
									events, recalling the inner artist in you.
								</span>
							</Col>
							<Divider />
							<Col xs={24} md={22}>
								<Row gutter={[20, 20]}>
									<Col>
										<Link passHref href='/mint'>
											<Button
												className='app-button'
												style={{ height: 50, width: 180 }}
											>
												Minting Event
											</Button>
										</Link>
									</Col>
									<Col>
										<Link href="/marketplace">
											<Button
												className='app-button'
												style={{
													height: 50,
													width: 140,
													background: 'none',
													color: 'rgb(181, 132, 56)',
												}}
											>
												Market
											</Button>
										</Link>
									</Col>
								</Row>
							</Col>
							<Col xs={0} md={0} md={24} style={{ marginTop: 30 }}>
								<Row justify='center'>
									{_.map(_.reverse(_.slice(latest_nfts, 0, 8)), (item) => {
										return (
											<Col key={item} xs={0} sm={0} md={6}>
												<Row justify='center'>
													<Col span={20}>
														<Image
															draggable={false}
															style={{
																// borderRadius: "50%",
																width: '100%',
																height: '100%',
																position: 'relative',
															}}
															alt='icon'
															src={`${item}`}
															external
															// src='wallstreetbet.png'
															className='collection-icon'
														/>
													</Col>
												</Row>
											</Col>
										);
									})}
								</Row>
							</Col>
						</Row>
					</Col>
					<Col xs={22} md={8}>
						<MintingPanel size='small' />
					</Col>
				</Row>
			</div>
			<Row justify='center' style={{ marginTop: 40 }}>
				<Col span={20}>
					<h1
						style={{
							color: 'rgb(181, 132, 56)',
							fontSize: 48,
							fontWeight: '600',
						}}
					>
						Market
					</h1>
				</Col>
			</Row>
			<Row justify='center' style={{ padding: '30px 0px' }}>
				<Col span={20}>
					<CollectionCarousel collections={latest_nfts} />
				</Col>
			</Row>
			<FAQ />
		</AppLayout>
	);
};

export const CollectionItem = ({ item, xs = 22, md = 20 }) => {
	// if (!item) return null;
	let rarity = () => {
		if (item <= 15) return 'Super Rare';
		if (item <= 254) return 'Rare';
		return 'Original';
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
					className='card-hover'
					style={{
						cursor: 'pointer',
						transition: 'opacity 0.3s ease-in-out',
						border: '1px solid #e5e5e5',
						borderBottomWidth: 3,
						height: '100%',
						width: '100%',
						borderRadius: 15,
						background: '#fff',
					}}
				>
					<Image
						draggable={false}
						style={{
							width: '100%',
							height: '100%',
						}}
						src={`${item}`}
						alt='wsb'
						external
						className='collection'
					/>
					<div style={{ padding: '15px 10px' }}>
						<Row
							justify='space-between'
							align='middle'
							style={{ marginBottom: 10 }}
						>
							<Col style={{ fontSize: 12, fontWeight: 500 }}>
								Crypto WallStreetBets
							</Col>
							<Col style={{ color: 'rgb(181, 132, 56)', fontWeight: '500' }}>
								{rarity()}
							</Col>
						</Row>
						<Row justify='space-between'>
							<Col style={{ color: 'green', fontWeight: '600' }}>
								Crypto WSB #{item}
							</Col>
							<Col style={{ fontWeight: '700', color: 'gray' }}>
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
			ssr={true} // means to render carousel on server-side.
			infinite={true}
			autoPlay
			autoPlaySpeed={3000}
			keyBoardControl
			// customTransition='all .5'
			transitionDuration={2000}
			containerClass='carousel-container'
			removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
			// deviceType={this.props.deviceType}
			// dotListClass='custom-dot-list-style'
			// itemClass='carousel-item-padding-40-px'
		>
			{_.map(collections, (item) => {
				return <CollectionItem key={item} item={item} />;
			})}
		</Carousel>
	);
};

const Background = () => {
	return (
		<div className='sc-dwqccx cZaRmu'>
			<div className='sc-gUUBao fnnsya'>
				<svg
					viewBox={`0 0 800 1200`}
					width='100%'
					height='100%'
					color='text'
					xmlns='http://www.w3.org/2000/svg'
					className='sc-bdfBQB nUAxB'
				>
					<path
						d='M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z'
						fill='url(#paint0_linear_light)'
					></path>
					<defs>
						<linearGradient
							id='paint0_linear_light'
							x1='830'
							y1='84'
							x2='830'
							y2='339'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='white' stopOpacity='0.48'></stop>
							<stop
								offset='0.566389'
								stopColor='white'
								stopOpacity='0.35'
							></stop>
							<stop offset='1' stopColor='white'></stop>
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/');
};

export default Home;
