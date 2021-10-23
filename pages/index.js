import AppLayout from '../components/AppLayout';
import { Row, Col, Button } from 'antd';
import Image from '../components/Image';
import Carousel from 'react-multi-carousel';
import FAQ from '../components/FAQ'

import Link from 'next/link'

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
const Home = () => {
	return (
		<AppLayout>
			<div className='home-section-card'>
				<Row
					justify='space-between'
					align='middle'
					style={{ padding: '0px 5%', minHeight: 300 }}
				>
					<Col>
						<Row>
							<Col span={24}>
								{' '}
								<h1 style={{ color: 'rgb(181, 132, 56)', fontSize: 60, fontWeight: '600' }}>
									Crypto WallStreetBets
								</h1>
							</Col>
							<Col>
								<Row gutter={[30, 0]}>
									<Col>
										<Button
											className='app-button'
											style={{ height: 50, width: 180 }}
										>
											Minting Event
										</Button>
									</Col>
									<Col>
										<Button
											className='app-button'
											style={{
												height: 50,
												width: 140,
												background: 'none',
												color: 'rgb(181, 132, 56)',
											}}
										>
											Airdrop
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col span={4}>
						<Image alt='icon' src='wallstreetbet.png' className='icon' />
					</Col>
				</Row>
			</div>
			<Row justify="center" style={{ marginTop: 40 }}>
				<Col span={20}>
					<h1 style={{ color: 'rgb(181, 132, 56)', fontSize: 48, fontWeight: '600' }}>Market</h1>
				</Col>
			</Row>
			<Row justify='center'>
				<Col span={20}>
					<CollectionCarousel />
				</Col>
			</Row>
			<FAQ />
		</AppLayout>
	);
};

const CollectionItem = ({ show }) => {
	return (
		<Col xs={22} md={20}>
			<Link href="/collection/123">
				<div
					className="card-hover"
					style={{
						cursor: "pointer",
						transition: 'opacity 0.3s ease-in-out',
						border: '1px solid #e5e5e5',
						borderBottomWidth: 3,
						height: '100%',
						width: '100%',
						borderRadius: 15,
					}}
				>
					<Image
						src={show ? 'wallstreetbet2.png' : 'wallstreetbet.png'}
						alt='wsb'
						className='collection'
					/>
					<div style={{ padding: '15px 10px' }}>
						<Row
							justify='space-between'
							align='middle'
							style={{ marginBottom: 10 }}
						>
							<Col style={{ fontSize: 12, fontWeight: 500 }}>Crypto WSB</Col>
							<Col style={{ color: 'rgb(181, 132, 56)', fontWeight: '500' }}>
								Super Rare
							</Col>
						</Row>
						<Row justify='space-between'>
							<Col style={{ color: 'green', fontWeight: '600' }}>
								Crypto WSB #0
							</Col>
							<Col style={{ fontWeight: '700', color: 'gray' }}>Rank 1</Col>
						</Row>
					</div>
				</div>
			</Link>
		</Col>
	);
};

const CollectionCarousel = () => {
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
			transitionDuration={1500}
			containerClass='carousel-container'
			removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
		// deviceType={this.props.deviceType}
		// dotListClass='custom-dot-list-style'
		// itemClass='carousel-item-padding-40-px'
		>
			<CollectionItem />
			<CollectionItem show />
			<CollectionItem />
			<CollectionItem />
			<CollectionItem show />
			<CollectionItem />
			<CollectionItem show />
			<CollectionItem />
			<CollectionItem />
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

export default Home;
