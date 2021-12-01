import AppLayout from '../components/AppLayout';
// import Image from '../components/Image';
import { CaretDownOutlined } from '@ant-design/icons';
import {
	Row,
	Col,
	Divider,
	Button,
	Input,
	InputNumber,
	notification,
} from 'antd';
import Image from "../components/Image";

import defaultStyles from '../core/theme/styles';
import { Popover } from 'antd-mobile';
import React, { useState, useEffect } from 'react';
// import WalletModal from '../components/WalletModal';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchData, fetchDataSuccess } from '../redux/data/dataActions';
import MintingPanel from '../components/MintingPanel';
import AirdropMintingPanel from '../components/AirdropMintingPanel';
import { getCustomStaticProps } from '../model/client';
import Header from '../components/Head';
import { init } from '../redux/blockchain/blockchainActions';

const Mint = (props) => {

	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [amount, setAmount] = useState(1);
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);

	useEffect(() => {
		dispatch(init())
		dispatch(
			fetchDataSuccess({
				name: props.name,
				total: _.toInteger(props.total),
				price: _.toInteger(props.amountToSend),
				airdrop: _.toInteger(props.airdrop),
				total_airdrop: _.toInteger(props.total_airdrop)
			})
		);
	}, [])

	// useEffect(() => {
	// 	setLoading(true);
	// 	if (blockchain.account !== '' && blockchain.smartContract !== null) {
	// 		dispatch(fetchData(blockchain.account));
	// 		setLoading(false);
	// 	}
	// 	setLoading(false);
	// }, [blockchain.smartContract, dispatch]);

	const mint = async (count) => {
		if (!blockchain.account) {
			return notification.warning({
				message: 'please connect metamask wallet',
			});
		}

		setLoading(true);

		// const amount = data.price * amount; // Willing to send 2 ethers
		const amountToSend = blockchain.web3.utils.toWei(
			_.toString(data.price * amount),
			'ether'
		); // Convert to wei value
		blockchain.smartContract.methods
			.mint(amount)
			.send({ from: blockchain.account, value: amountToSend })
			.once('error', (err) => {
				console.log(err);
				setLoading(false);
				notification.error({
					message: 'Error',
				});
			})
			.then((receipt) => {
				console.log(receipt);
				setLoading(false);
				dispatch(fetchData(blockchain.account));
				notification.success({
					message: 'Successfully minting your NFT',
				});
			});
	};

	return (
		<AppLayout fullWidth footer={false}>
			<Header
				title='Mint | Squat Panda'
				description='Squat Panda - Mint the Squat Panda'
			/>
			<div style={{ background: "url('bg.png')", opacity: 0.65, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', paddingBottom: 100 }}></div>
			<div style={{ width: "100%", position: 'relative' }} className="banner-container" >
				<Image src="airdrop-banner.jpg" width={3} height={1} alt="banner" />
			</div>
			<Row justify="center" style={{ margin: '40px 0px' }}>
				<div className="chevron"></div>
				<div className="chevron"></div>
				<div className="chevron"></div>
				<span className="text">Scroll down</span>
			</Row>
			<Row justify="center">
				<Col span={24} style={{ textAlign: 'center', fontSize: 44 }}>

				</Col>
				<Col span={22}>
					<Row>
						<Col span={24} style={defaultStyles.banner}>
							Claim a Squat Panda
						</Col>
						<Col xs={22} md={14} style={defaultStyles.subBody}>
							Squat Panda are 10,000 art pieces with a one-of-a-kind digital
							collection of various NFTs that are stored on the Polygon Blockchain.
							Each one has been meticulously created, hand-picked, and perfectly
							formed.
						</Col>
					</Row>
				</Col>
			</Row>
			<Row justify='center' style={{ marginBottom: 20 }}>

				<Col xs={22} md={8}>
					{/* <AirdropMintingPanel /> */}
					<MintingPanel />
				</Col>
			</Row>
			<Row justify='center' style={{ minHeight: 250	 }}>
				<Col span={8}>
			<Divider>
				<b>Reminds & Instructions</b>
			</Divider>
				<p>1. 500 NFTs can be claimed for free and every address can claim one NFT</p>
				<p>2. Each one has been meticulously created, and perfectly formed</p>
				<p>3. NFTs can mint on Polygon Network and trade on Opensea marketplace</p>
				<p>4. Donate 1% NFT revenue to World Wide Fund for Nature (WWF)</p>
				</Col>
			</Row>
		</AppLayout>
	);
};

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/mint');
};

export default Mint;
