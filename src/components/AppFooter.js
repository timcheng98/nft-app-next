import { Row, Col } from 'antd';
import { TwitterOutlined, InstagramFilled } from '@ant-design/icons';
import Image from './Image';
import React from 'react'

const AppFooter = () => {
	return (
		<Row justify='center' style={{ marginBottom: 30 }}>
			<Col span={22}>
				<Row
					justify='center'
					align='middle'
					style={{ minHeight: 100, textAlign: 'center' }}
				>
					<Col xs={4} md={2} style={{ textAlign: 'center' }}>
						<a
							rel='noreferrer'
							href='https://twitter.com/SquatPanda'
							target='_blank'
						>
							<TwitterOutlined style={{ fontSize: 32, color: '#1DA1F2' }} />
						</a>
					</Col>
					<Col xs={4} md={2} style={{ textAlign: 'center' }}>
						<a
							rel='noreferrer'
							href='https://www.instagram.com/squat.panda.nft/'
							target='_blank'
						>
							<InstagramFilled style={{ fontSize: 32,  color: '#1DA1F2' }} />
						</a>
					</Col>
					<Col xs={4} md={2} style={{ textAlign: 'center' }}>
						<a
							rel='noreferrer'
							href='https://discord.com/invite/p5eNZYa3NY'
							style={{ textAlign: 'center',  color: '#1DA1F2' }}
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
