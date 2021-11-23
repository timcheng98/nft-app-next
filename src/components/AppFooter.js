import { Row, Col } from 'antd';
import { TwitterOutlined, MediumOutlined } from '@ant-design/icons';
import Image from './Image';
import React from 'react'

const AppFooter = () => {
	return (
		<Row justify='center'>
			<Col span={22}>
				<Row
					justify='center'
					align='middle'
					style={{ minHeight: 100, textAlign: 'center' }}
				>
					<Col xs={4} md={2} style={{ textAlign: 'center' }}>
						<a
							rel='noreferrer'
							href='https://twitter.com/NFT_WSB'
							target='_blank'
						>
							<TwitterOutlined style={{ fontSize: 32 }} />
						</a>
					</Col>
					<Col xs={4} md={2} style={{ textAlign: 'center' }}>
						<a
							rel='noreferrer'
							href='https://medium.com/@crypto.wallstreetbets'
							target='_blank'
						>
							<MediumOutlined style={{ fontSize: 32 }} />
						</a>
					</Col>
					<Col xs={4} md={2} style={{ textAlign: 'center' }}>
						<a
							rel='noreferrer'
							href='https://discord.com/invite/p5eNZYa3NY'
							style={{ textAlign: 'center' }}
							target='_blank'
						>
							<div
								style={{
									width: 32,
									height: '100%',
									textAlign: 'center',
									margin: 'auto',
								}}
							>
								<Image src='discord.png' alt='discord' />
							</div>
						</a>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default AppFooter;
