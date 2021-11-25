import React from 'react';
import { Row, Col, Divider } from 'antd';
import defaultStyles from '../core/theme/styles';

const RoadMap = () => {
	return (
		<Row justify='center' style={{ backgroundColor: '#fff'}}>
			<Col span={20}>
				<Row>
					<Col xs={24} md={10}>
						<h1
							style={{
								color: 'rgb(109, 40, 217)',
								fontSize: 48,
								// marginTop: 30,
								fontWeight: '600',
								textAlign: 'center',
							}}
						>
							Roadmap
						</h1>
						<p></p>
					</Col>
					<Col xs={24} md={14}>
						<Row gutter={[0, 20]}>
							<Col span={24}>
								<h1
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									2021 Q4
								</h1>
							</Col>
							<Col
								span={24}
								style={{
									...defaultStyles.subHeader,
									color: 'green',
								}}
							>
								Launch of the first version of the squatpanda.online website.
								(Finished)
							</Col>
							<Col
								span={24}
								style={{
									...defaultStyles.subHeader,
									color: 'green',
								}}
							>
								Deploy Squat Panda smart contract on Polygon Network (Finished)
							</Col>
							<Col
								span={24}
								style={{
									...defaultStyles.subHeader,
									color: 'blue',
								}}
							>
								500 Airdrop Release (In Progress)
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Squat Panda NFT Pre-Sale
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Mint Squat Panda NFT
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Available on Opensea
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Donate 10% NFT revenue to World Wide Fund for Nature (WWF)
							</Col>
						</Row>
						<Row gutter={[0, 20]}>
							<Col span={24}>
              <Divider />
								<h1
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									2022 Q1
								</h1>
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Design and sale of Squat Panda merchandise
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Donate 10% sale revenue to animal charities worldwide
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Whitepaper - Finalization of the official Squat Panda
								whitepaper.
							</Col>
						</Row>
						<Row gutter={[0, 20]}>
							<Col span={24}>
              <Divider />
								<h1
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									2022 Q2
								</h1>
							</Col>
							<Col
								span={24}
								style={{
									...defaultStyles.subHeader,
								}}
							>
								$SPD ERC20 Token launch
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Donate 10% token revenue to animal charities worldwide
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Plan to list $SPD ERC20 Token on DeFi
							</Col>
							<Col span={24} style={defaultStyles.subHeader}>
								Provide Liquidity Pool
							</Col>
						</Row>
						<Row gutter={[0, 20]}>
							<Col span={24}>              <Divider />


								<h1
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
                    margin: '30px 0px',
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									And Much More...
								</h1>
							</Col>
						</Row>

					</Col>
				</Row>
			</Col>
		</Row>
	);
};
export default RoadMap;
