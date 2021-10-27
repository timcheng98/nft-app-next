import { Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import WalletModal from './WalletModal';
import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import defaultStyles from '../core/theme/styles';

const AppHeader = () => {
	const [visible, setVisible] = useState(false);
	const blockchain = useSelector((state) => state.blockchain);

	return (
		<Row
			justify='center'
			style={{
				padding: '0px',
				minHeight: 60,
				zIndex: 9999,
				backgroundColor: '#fff',
			}}
		>
			<Col xs={22} md={23} style={{ backgroundColo: '#fff' }}>
				<Row
					justify='space-between'
					align='middle'
					style={{
						minHeight: 'inherit',
						padding: '10px 0px',
						backgroundColor: '#fff',
					}}
				>
					<Link passHref href='/'>
						<Col xs={3} sm={4} md={8} style={{ cursor: 'pointer' }}>
							<div style={{ width: 60, height: 60 }}>
								<Image
									draggable={false}
									alt='icon'
									src='icon.gif'
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									className='icon'
								/>
							</div>
						</Col>
					</Link>
					<Col xs={0} md={8}>
						{' '}
						<p
							style={{
								...defaultStyles.subHeader,
								fontSize: 24,
								textAlign: 'center',
								margin: 0,
							}}
						>
							Crypto WallStreetBets NFT
						</p>
					</Col>
					<Col md={8}>
						<Row justify='end'>
							<Col>
								<Button
									onClick={() => setVisible(true)}
									icon={<WalletIcon />}
									className='app-button'
								>
									<span
										style={{
											padding: '0px 10px',
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											width: 150,
											textOverflow: 'ellipsis',
										}}
									>
										{blockchain.account ? (
											<span>{blockchain.account}</span>
										) : (
											'Connect Wallet'
										)}
									</span>
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
				<WalletModal visible={visible} setVisible={setVisible} />
			</Col>
		</Row>
	);
};

const WalletIcon = () => {
	return (
		<svg
			viewBox='0 0 24 24'
			width='24px'
			fill='rgb(181, 132, 56)'
			xmlns='http://www.w3.org/2000/svg'
			className='sc-bdfBQB fkooRD'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z'
			></path>
		</svg>
	);
};

export default AppHeader;
