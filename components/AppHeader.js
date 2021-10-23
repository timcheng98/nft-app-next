import { Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import Image from './Image';
import defaultStyles from '../core/theme/styles';

const myLoader = ({ src, width, quality }) => {
	return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const AppHeader = () => {
	return (
		<div style={{ padding: '0px 50px', minHeight: 80 }}>
			<Row
				justify='space-between'
				align='middle'
				style={{ minHeight: 'inherit', padding: '20px 0px' }}
			>
				<Col xs={4} sm={4} md={2} lg={1}>
					<Image alt="icon" src='icon.gif' className="icon" />
				</Col>
				<Col>
					<Button icon={<WalletIcon />} className='app-button'>
						<span style={{ padding: '0px 10px' }}>Connect Wallet</span>
					</Button>
				</Col>
			</Row>
		</div>
	);
};

const WalletIcon = () => {
	return (
		<svg
			viewBox='0 0 24 24'
			width='24px'
			fill='rgb(181, 132, 56)'
			xmlns='http://www.w3.org/2000/svg'
			class='sc-bdfBQB fkooRD'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z'
			></path>
		</svg>
	);
};

export default AppHeader;
