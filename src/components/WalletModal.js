import { Row, Col, Modal, Divider, Button, notification, Input } from 'antd';
import { CloseOutline, HeartOutline } from 'antd-mobile-icons';
import defaultStyles from '../core/theme/styles';
import Image from './Image';
import { Toast } from 'antd-mobile';

import React, { useEffect } from 'react';
import {
	connect,
	disconnect,
	clearErrorMsg,
	setModalVisible,
} from '../redux/blockchain/blockchainActions';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { CopyOutlined, LogoutOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";

const WalletModal = () => {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);

	useEffect(() => {
		if (!blockchain.errorMsg) return;
		notification.error({
			message: blockchain.errorMsg,
		});
		dispatch(clearErrorMsg());

	}, [blockchain]);

	return (
		<Modal
			// forceRender
			destroyOnClose
			visible={blockchain.modalVisible}
			closable={false}
			footer={null}
			centered
			maskStyle={{
				background: 'rgba(0, 0, 0, 0.5)',
			}}
			onCancel={() => dispatch(setModalVisible(false))}
			bodyStyle={{ minHeight: 350 }}
			className={blockchain.account ? 'app-modal-account' : 'app-modal'}
		>
			{blockchain.account ? (
				<AccountInfo />
			) : (
				<ConnectWallet />
			)}
		</Modal>
	);
};

const AccountInfo = () => {
	const router = useRouter()
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);

	return (
		<>
			<Row
				justify='space-between'
				align='middle'
				style={{
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					padding: '0px 30px',
					marginBottom: 30,
					height: 70,
					background: 'rgb(229, 253, 255)',
				}}
			>
				<Col style={defaultStyles.subHeader}>Your Wallet</Col>
				<Col>
					<CloseOutline
						onClick={() => dispatch(setModalVisible(false))}
						style={defaultStyles.subHeader}
					/>
				</Col>
			</Row>
			<Row justify='center'>
				<Col span={21}>
					<Row
						style={{
							marginBottom: 30,
							display: blockchain.balance === 0 ? 'block' : 'none',
						}}
						align='middle'
					>
						<Col span={24}>
							<div
								style={{
									...defaultStyles.card,
									background: 'rgba(255, 178, 55, 0.098)',
									// border: '1px solid #2b2b2b',
									width: '100%',
									padding: '0px 20px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									minHeight: 80,
									borderRadius: 15,
								}}
							>
								<Row>
									<Col span={24} style={defaultStyles.subHeader}>
										MATIC Balance Low
									</Col>
									<br />
									<Col span={24} style={defaultStyles.subBody}>
										You need MATIC for transaction fees.
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
					<Row
						align='middle'
						justify='space-between'
						style={{ marginBottom: 30 }}
					>
						<Col style={defaultStyles.subHeader}>MATIC Balance</Col>
						<Col style={defaultStyles.subHeader}>
							<Row align='middle' justify='end' gutter={[10, 0]}>
								<Col>
									<div>
										<img
											// width={50}
											// height={50}
											src='/matic.png'
											style={{ width: 20, height: 20 }}
											alt='matic'
											className='icon'
										/>
									</div>
								</Col>
								<Col>{blockchain.balance.toFixed(3)}</Col>
							</Row>
						</Col>
					</Row>
					<Row justify='center' style={{ marginBottom: 30 }} gutter={[0, 10]}>
						<Col
							span={24}
							style={{
								...defaultStyles.subBody,
								fontSize: 14,
							}}
						>
							My Address
						</Col>
						<Col span={24} className='account-address'>
							<Input
								disabled
								style={{
									background: 'rgb(246, 246, 246)',
									border: 'none',
									color: '#2b2b2b',
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
					</Row>
					<Row
						justify='space-between'
						align='middle'
						style={{ marginBottom: 20 }}
					>
						<Button
						type="text"
						onClick={() => {
							dispatch(setModalVisible(false));
							router.push('/account')
						}}
						>
						<Col
							style={{
								...defaultStyles.subHeader,
								color: '#2b2b2b',
								cursor: 'pointer'
							}}
						>
							Collection
							<HeartOutline style={{ marginLeft: 5 }} />
						</Col>
						</Button>
						<Col
							style={{
								...defaultStyles.subBody,
								color: '#2b2b2b',
							}}
						>
							<a
								rel='noreferrer'
								target='_blank'
								// href={`https://polygonscan.com/address/${blockchain.account}`}
							>
								View Transactions
							</a>
						</Col>
					</Row>
					{/* <Row style={{ marginBottom: 20 }}>
						<Col span={24}>
							<Button
								onClick={() => {
									router.push('/mint')
									// dispatch(disconnect());
									dispatch(setModalVisible(false))
								}}
								block
								style={{
									...defaultStyles.subHeader,
									// background: 'none',
									color: '#fff',
									height: 45,
								}}
								className='app-button'
								// icon={<LogoutOutlined />}
							>
								Mint
							</Button>
						</Col>
					</Row> */}
					<Row style={{ marginBottom: 30 }}>
						<Col span={24}>
							<Button
								onClick={() => {
									dispatch(disconnect());
									dispatch(setModalVisible(false))
								}}
								block
								style={{
									...defaultStyles.subHeader,
									background: 'none',
									color: '#2b2b2b',
									height: 45,
								}}
								className='app-button'
								icon={<LogoutOutlined />}
							>
								Disconnect Wallet
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

const ConnectWallet = () => {
	const dispatch = useDispatch();

	const blockchain = useSelector((state) => state.blockchain);

	return (
		<>
			<Row
				justify='space-between'
				align='middle'
				style={{
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					padding: '0px 30px',
					marginBottom: 30,
					height: 70,
					background: 'rgb(229, 253, 255)',
				}}
			>
				<Col style={defaultStyles.subHeader}>Connect Wallet</Col>
				<Col>
					<CloseOutline
						onClick={() => dispatch(setModalVisible(false))}
						style={defaultStyles.subHeader}
					/>
				</Col>
			</Row>
			<Row
				justify='center'
				className='hover'
				style={{
					padding: '0px 30px',
				}}
			>
				<Col>
					<div
						onClick={() => {
							if (!blockchain.account) {
								dispatch(connect());
								// dispatch(setModalVisible(false))
							}
						}}
					>
						<Image src='metamask.svg' />
					</div>
					Metamask
				</Col>
			</Row>
			<Divider />
			<Row
				gutter={[0, 20]}
				style={{
					padding: '0px 20px',
					textAlign: 'center',
				}}
			>
				<Col span={24} style={defaultStyles.subBody}>
					Haven't got a crypto wallet yet?
				</Col>
				<Col span={24}>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://quickswap-layer2.medium.com/guide-how-to-set-up-custom-matic-mainnet-rpc-for-metamask-transfer-assets-from-l1-to-l2-to-use-3b1e55ccb5cb'
					>
						<Button
							style={{
								...defaultStyles.subBody,
								color: '#fff',
								height: 50,
								background: '#2b2b2b',
								width: '100%',
								border: 'none',
							}}
							className='app-button'
						>
							Learn How to Connect
						</Button>
					</a>
				</Col>
			</Row>
		</>
	);
};

export default WalletModal;
