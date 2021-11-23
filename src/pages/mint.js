import AppLayout from '../components/AppLayout';
// import Image from '../components/Image';
import { GiftOutline, QuestionCircleOutline } from 'antd-mobile-icons';
import {
	Row,
	Col,
	Divider,
	Button,
	Input,
	InputNumber,
	notification,
} from 'antd';
import defaultStyles from '../core/theme/styles';
import { Popover } from 'antd-mobile';
import React, { useState, useEffect } from 'react';
// import WalletModal from '../components/WalletModal';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchData } from '../redux/data/dataActions';
import MintingPanel from '../components/MintingPanel';
import { getCustomStaticProps } from '../model/client';
import Header from '../components/Head';

const Mint = () => {
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [amount, setAmount] = useState(1);
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);

	useEffect(() => {
		setLoading(true);
		if (blockchain.account !== '' && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
			setLoading(false);
		}
		setLoading(false);
	}, [blockchain.smartContract, dispatch]);

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
		<AppLayout>
			<Header
				title='Mint | Squat Panda'
				description='Squat Panda - Mint the Squat Panda'
			/>

			<Row style={{ marginTop: 40 }}>
				<Col span={24} style={defaultStyles.banner}>
					Mint a Squat Panda
				</Col>
				<Col xs={22} md={18} style={defaultStyles.subBody}>
				Squat Panda are 9630 art pieces with a one-of-a-kind digital
					collection of various NFTs that are stored on the Polygon Blockchain.
					Each one has been meticulously created, hand-picked, and perfectly
					formed.
				</Col>
			</Row>
			<Divider />
			<div style={{ marginBottom: 20 }}>
				<Row justify='center'>
					<Col xs={24} md={10}>
						<MintingPanel />
					</Col>
				</Row>
			</div>
		</AppLayout>
	);
};

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/mint');
};

export default Mint;
