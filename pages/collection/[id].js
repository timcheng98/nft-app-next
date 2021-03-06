import AppLayout from '../../components/AppLayout';
import { SendOutline } from 'antd-mobile-icons';

import { Button, Row, Col, Divider } from 'antd';
import { LeftOutline } from 'antd-mobile-icons';
import Link from 'next/link';
import Image from '../../components/Image';
import defaultStyles from '../../core/theme/styles';
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Popover } from 'antd-mobile';
import { useRouter } from 'next/router';
import { getCustomStaticPaths, getCustomStaticProps } from '../../model/client';
import Header from '../../components/Head';
const Collection = (props) => {
	const router = useRouter();
	const { collection } = props;

	const rarity = () => {
		if (collection.edition <= 15) return 'Super Rare';
		if (collection.edition <= 254) return 'Rare';
		return 'Original';
	};

	const getScore = () => {
		let score = 500; // base (Background)
		if (collection.edition <= 15) return 4 * 1500 * 2 + score;
		if (collection.edition <= 254) return 4 * 1000 * 2 + score;
		return 4 * 500 * 2 + score;
	};

	const getTrait = (item) => {
		if (item.trait_type === 'background') return _.round((1 / 15) * 100, 2);
		if (item.trait_type === 'face') return 100;
		if (collection.edition <= 15) {
			let total = (15 / 9630) * 100;
			return _.round(total, 2);
		}
		if (collection.edition <= 254) {
			let total = (240 / 9630) * 100;
			return _.round(total / 2, 2);
		}
		let total = (9376 / 9630) * 100;
		return _.round(total / 8, 2);
	};

	return (
		<AppLayout fullWidth>
			<Header
				title={`WSB#${collection.edition} | Crypto WallStreetBets NFT`}
				description='Crypto WallStreetBets NFT - Information the Crypto WallStreetBets NFT'
			/>

			<div style={{ padding: '40px 0px', background: 'rgb(250, 249, 250)' }}>
				<Row justify='center' gutter={[0, 40]} style={{}}>
					<Col xs={22} md={16}>
						<Button
							onClick={() => router.back()}
							className='app-button'
							style={{ height: 50, width: 120 }}
							icon={<LeftOutline />}
						>
							Go Back
						</Button>
					</Col>

					<Col xs={22} md={16}>
						<Row justify='space-between'>
							<Col xs={24} md={12}>
								<Row justify='center' gutter={[0, 30]}>
									<Col xs={24} lg={24}>
										<Image
											draggable={false}
											style={{
												width: '100%',
												height: '100%',
											}}
											src={`${collection.edition}`}
											alt='wsb'
											external
											className='collection'
										/>
									</Col>
									<Col xs={24} md={0}>
										<Row style={defaultStyles.subHeader} gutter={[0, 20]}>
											<Col span={24} style={defaultStyles.subHeader}>
												The Crypto WallStreetBets NFT
											</Col>
											<Col span={24} style={defaultStyles.header}>
												<a
													rel='noreferrer'
													href={`https://polygonscan.com/token/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a?a=${collection.edition}`}
													target='_blank'
												>
													{collection.name}
												</a>
											</Col>
											{/* <Col span={24}>Owned by</Col>
                      <Col span={24}>Current Price</Col>
                      <Col span={24}>Highest Bid</Col> */}
										</Row>
									</Col>
									<Col span={24}>
										<div style={defaultStyles.card}>
											<span style={defaultStyles.header}>Detail</span>
											<Divider style={{ margin: '10px 0px' }} />
											<Row
												style={defaultStyles.subHeader}
												justify='space-between'
											>
												<Col>Rank</Col>
												<Col>{collection.edition}</Col>
											</Row>
											<Row
												style={defaultStyles.subHeader}
												justify='space-between'
											>
												<Col>Score</Col>
												<Col>{getScore()}</Col>
											</Row>
											<Row
												style={defaultStyles.subHeader}
												justify='space-between'
											>
												<Col>Rarity</Col>
												<Col>{rarity()}</Col>
											</Row>
											<Row
												style={defaultStyles.subHeader}
												justify='space-between'
											>
												<Col>IPFS</Col>
												<Col span={8}>
													<Popover
														content={collection.image}
														mode='dark'
														placement='top'
													>
														<div
															style={{
																// padding: "0px 10px"
																padding: 0,
																whiteSpace: 'nowrap',
																overflow: 'hidden',
																width: '100%',
																textOverflow: 'ellipsis',
															}}
														>
															{collection.image}
														</div>
													</Popover>
												</Col>
											</Row>
										</div>
									</Col>
								</Row>
							</Col>
							<Col xs={0} md={11}>
								<Row style={defaultStyles.subHeader} gutter={[0, 20]}>
									<Col span={24} style={defaultStyles.subHeader}>
										The Crypto WallStreetBets NFT
									</Col>
									<Col span={24} style={defaultStyles.header}>
										<a
											rel='noreferrer'
											href={`https://polygonscan.com/token/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a?a=${collection.edition}`}
											target='_blank'
										>
											{collection.name}
										</a>
									</Col>
									{/* <Col span={24}>Owned by</Col>
                  <Col span={24}>Current Price</Col>
                  <Col span={24}>Highest Bid</Col> */}
									<Col span={24}>
										<a
											rel='noreferrer'
											target='_blank'
											href={`https://opensea.io/assets/matic/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a/${collection.edition}`}
										>
											<Button
												style={{
													background: 'rgb(21, 178, 229)',
													border: 'none',
													width: 160,
												}}
												className='app-button'
												icon={<SendOutline style={{ margin: '0px 5px' }} />}
											>
												Opensea
											</Button>
										</a>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>

					<Col
						xs={22}
						md={16}
						style={{
							...defaultStyles.card,
							padding: '30px 20px',
						}}
					>
						<span style={defaultStyles.header}>Attributes</span>
						<Divider />

						<Row justify='space-around' align='middle' gutter={[0, 40]}>
							{_.map(collection.attributes, (item) => {
								return (
									<Col xs={10} md={7} key={item.trait_type}>
										<Row justify='center'>
											<Col
												xs={24}
												md={18}
												style={{
													...defaultStyles.card,
													padding: 20,
													border: '1px solid rgb(21, 178, 229)',
													background: 'rgba(21, 178, 229, 0.06)',
													textAlign: 'center',
													borderRadius: 15,
												}}
											>
												<Row align='middle' justify='center' gutter={[0, 5]}>
													<Col
														span={24}
														style={{
															...defaultStyles.subBody,
															fontSize: 13,
															color: 'rgb(21, 178, 229)',
														}}
													>
														{_.upperCase(item.trait_type)}
													</Col>
													<Col
														span={24}
														style={{
															...defaultStyles.subHeader,
															fontSize: 14,
															color: 'rgb(53, 56, 64)',
														}}
													>
														<div
															style={{
																padding: '0px 10px',
																whiteSpace: 'nowrap',
																overflow: 'hidden',
																width: '100%',
																textOverflow: 'ellipsis',
															}}
														>
															{item.value}
														</div>
													</Col>
													<Col
														style={{
															...defaultStyles.subBody,
															fontSize: 12,
															color: 'rgb(112, 122, 131)',
														}}
														span={24}
													>
														{getTrait(item)} % have this trait
													</Col>
												</Row>
											</Col>
										</Row>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</div>
		</AppLayout>
	);
};

export const getStaticPaths = async () => {
	return getCustomStaticPaths();
};
export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/collection/[id]');
};

// export async function getStaticProps({ params }) {
// 	// Call an external API endpoint to get posts.
// 	// You can use any data fetching library
// 	const resp = await axios.get(
// 		`http://localhost:3000/api/collection/${params.id}`
// 	);

// 	// By returning { props: { posts } }, the Blog component
// 	// will receive `posts` as a prop at build time
// 	return {
// 		props: {
// 			collection: resp.data.data,
// 		},
// 	};
// }

export default Collection;
