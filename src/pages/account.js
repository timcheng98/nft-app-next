import AppLayout from '../components/AppLayout';
import { Row, Col, Divider, Input, Button } from 'antd';
import defaultStyles from '../core/theme/styles';
import { Toast } from 'antd-mobile';
import Link from 'next/link';
import _ from 'lodash';
import axios from 'axios'
import { CopyOutlined, LogoutOutlined } from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import { connect, setModalVisible } from '../redux/blockchain/blockchainActions';
import { fetchAccountData } from '../redux/data/dataActions';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionItem } from '../components/CollectionList';
import { getCustomStaticProps } from '../model/client';
import Header from '../components/Head';

const Account = (props) => {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const [accountNfts, setAccountNfts] = useState([])
	useEffect(() => {
		dispatch(connect())
	}, [])
	

	useEffect(() => {
    if (!blockchain.smartContract) return;
    getAccountData()
  }, [blockchain.smartContract, dispatch]);

	const getAccountData = () => {
		dispatch(fetchAccountData());
	};

	useEffect(() => {
		getData();
	}, [data.accountTokens]);

	const getData = async () => {
		if (_.isEmpty(data.accountTokens)) return;
		const resp = await axios.post('/api/nft', { nfts: data.accountTokens });
		setAccountNfts(resp.data.data)
	};

	return (
		<AppLayout color="rgb(141, 102, 209)">
			<Header
				title='Account | Squat Panda'
				description='Squat Panda - Account information the Squat Panda and show the owner collections'
			/>

			<Row justify='center' style={{ marginTop: 30 }}>
				<Col xs={24} md={20}>
					<Row>
						<Col span={24} style={{
							...defaultStyles.banner,
							color: '#fff'
						}}>
							Collection
						</Col>
						<Col span={24} style={{
							...defaultStyles.subHeader,
							color: '#fff'
						}}>
							Your profile's information and collection.
						</Col>
						<Divider />
					</Row>
					{blockchain.account ? (
						<Panel collections={accountNfts} />
					) : (
						<Row justify='center'>
							<Col xs={24} md={12}>
								<Button
									onClick={() => dispatch(setModalVisible(true))}
									block
									style={{ height: 60, fontSize: 20 }}
									className='app-button'
								>
									Connect Wallet
								</Button>
							</Col>
						</Row>
					)}
				</Col>
			</Row>
			<Row>
				<Col
					span={24}
					style={{
						...defaultStyles.header,
						textAlign: 'center',
						margin: '40px 0px',
						color: '#fff'
						// fontSize: 24,
					}}
				>
					{!_.isEmpty(data.accountTokens) ? '	Your Collections' : null}
				</Col>
			</Row>
			<Row justify='center'>
				<Col
					span={20}
					style={{
						// ...defaultStyles.subHeader,
						textAlign: 'center',
						// marginTop: 40,
						// fontSize: 24,
					}}
				>
					<Row justify='center' gutter={[15, 25]}>
						{_.isEmpty(data.accountTokens) ? (
							<Col
								span={24}
								style={{
									...defaultStyles.subHeader,
									textAlign: 'center',
									color: '#fff',
									// marginTop: 40,
									fontSize: 24,
								}}
							>
								You have no NFTs
							</Col>
						) : (
							_.map(accountNfts, (item) => {
								console.log(item.collection);
								return (
									<Col xs={24} md={6} key={item}>
										<CollectionItem containerStyle={{ border: 'none' }} xs={24} md={24} item={item.collection} />
									</Col>
								);
							})
						)}
					</Row>
				</Col>
			</Row>
			{/* <WalletModal visible={visible} setVisible={setVisible} /> */}
		</AppLayout>
	);
};

const Panel = ({ collections }) => {
	const blockchain = useSelector((state) => state.blockchain);
	// const data = useSelector((state) => state.data);

	const [type, setType] = useState({
		legendary: 0,
		super_rare: 0,
		rare: 0,
		original: 0
	})

	useEffect(() => {
		if (_.isEmpty(collections)) return;
		let type = {
			legendary: 0,
			super_rare: 0,
			rare: 0,
			original: 0
		}
		_.map(collections, (item) => {
			const nft = item.collection
			if (nft.type === 'legendary') {
				type.legendary = type.legendary + 1
				return 
			}
			if (nft.type === 'super_rare') {
				type.super_rare = type.super_rare + 1
				return 
			}
			if (nft.type === 'rare') {
				type.rare = type.rare + 1
				return 
			}
			if (nft.type === 'original') {
				type.original = type.original + 1
				return 
			}
		})
		setType(type)
	}, [collections])


	return (
		<Row align='middle'>
			<Col span={24}>
				<div style={defaultStyles.card}>
					<Row justify='space-between' align='middle' gutter={[0, 20]}>
						<Col xs={24} md={11}>
							<Row gutter={[0, 15]}>
								<Col span={24} className='account-address'>
									<Input
										disabled
										style={{
											background: 'rgb(246, 246, 246)',
											border: 'none',
											color: 'rgb(40, 13, 95)',
											fontSize: 16,
											fontWeight: '600',
											borderRadius: 15,
											height: 50,
										}}
										value={blockchain.account}
										suffix={
											<CopyOutlined
												style={{
													zIndex: 99,
													cursor: 'pointer',
												}}
												onClick={() => {
													Toast.show({
														icon: 'success',
														content: 'Copied',
													});

													navigator.clipboard.writeText(blockchain.account);
												}}
											/>
										}
									/>
								</Col>
								<Col span={24}>
									<Row align='middle' justify='space-between' gutter={[0, 20]}>
										<Col xs={24} md={16}>
											<div
												style={{
													background: 'rgb(246, 246, 246)',
													border: 'none',
													color: 'rgb(40, 13, 95)',
													fontSize: 16,
													fontWeight: '600',
													borderRadius: 15,
													height: 50,
													padding: '10px 20px',
												}}
											>
												All withdrawable: {blockchain.balance} MATIC
											</div>
										</Col>
										<Col xs={24} md={7}>
											<Link href='/mint'>
												<Button
													block
													className='app-button'
													style={{ height: 50 }}
												>
													Airdrop
												</Button>
											</Link>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col xs={24} md={11}>
							<div style={defaultStyles.card}>
								<p style={defaultStyles.subHeader}>Your NFTs</p>
								<Row justify='space-around' align="middle" gutter={[0, 20]}>
									<Col
										xs={24}
										md={10}
										style={{
											background: 'rgb(246, 246, 246)',
											border: 'none',
											color: 'rgb(40, 13, 95)',
											fontSize: 14,
											fontWeight: '600',
											borderRadius: 15,
											minHeight: 60,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											textAlign: 'center',
											// padding: '10px 20px',
										}}
									>
										Legendary <br />{type.legendary}
									</Col>
									<Col
											xs={24}
										md={10}
										style={{
											background: 'rgb(246, 246, 246)',
											border: 'none',
											color: 'rgb(40, 13, 95)',
											fontSize: 14,
											fontWeight: '600',
											borderRadius: 15,
											minHeight: 60,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											textAlign: 'center',
											// padding: '10px 20px',
										}}
									>
										Super Rare <br />{type.super_rare}
									</Col>
									<Col
											xs={24}
										md={10}
										style={{
											background: 'rgb(246, 246, 246)',
											border: 'none',
											color: 'rgb(40, 13, 95)',
											fontSize: 14,
											fontWeight: '600',
											borderRadius: 15,
											minHeight: 60,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											textAlign: 'center',
											// padding: '10px 20px',
										}}
									>
										Rare <br />{type.rare}
									</Col>
									<Col
											xs={24}
										md={10}
										style={{
											background: 'rgb(246, 246, 246)',
											border: 'none',
											color: 'rgb(40, 13, 95)',
											fontSize: 14,
											fontWeight: '600',
											borderRadius: 15,
											minHeight: 60,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											textAlign: 'center',
											// padding: '10px 20px',
										}}
									>
										Original <br />{type.original}
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

// export const getStaticProps = async (context) => {
// 	return getCustomStaticProps(context, '/account', 1);
// };

export default Account;
