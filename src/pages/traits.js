import { Col, Row, Collapse, List, Divider } from 'antd';
import AppLayout from '../components/AppLayout';
import _ from 'lodash';
import defaultStyles from '../core/theme/styles';
import { getCustomStaticProps } from '../model/client';
import React from 'react';
import Header from '../components/Head';
const { Panel } = Collapse;

const Traits = (props) => {
	return (
		<AppLayout>
			<Header
				title='Traits | Squat Panda'
				description='Squat Panda - Information the Squat Panda Traits'
			/>

			<Row style={{ marginTop: 40 }}>
				<Col span={24} style={defaultStyles.banner}>
					Traites Distribution
				</Col>
				<Col xs={22} md={18} style={defaultStyles.subBody}>
				Squat Panda are 9630 art pieces with a one-of-a-kind digital
					collection of various NFTs that are stored on the Polygon Blockchain.
					Each one has been meticulously created, hand-picked, and perfectly
					formed.
				</Col>
			</Row>
			<Divider />
			<Collapse
				expandIconPosition='right'
				defaultActiveKey={['Background']}
				ghost
			>
				{_.map(props.rarity, (item) => {
					return (
						<Panel
							header={
								<span style={{ ...defaultStyles.subHeader, fontSize: 20 }}>
									{item.name}
								</span>
							}
							key={item.name}
							style={{
								border: '1px solid #000',
								...defaultStyles.card,
								padding: '0px 10px',
								minHeight: 30,
								background:
									'linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%)',
								// borderRadius: "24px 24px 0px 0px",
								marginBottom: 30,
							}}
						>
							<Divider style={{ margin: '0px 0px 20px 0px' }} />

							<Row justify='space-between'>
								<Col
									xs={0}
									md={18}
									style={{ ...defaultStyles.header, fontSize: 16 }}
								>
									Name
								</Col>
								<Col xs={0} md={6}>
									<Row justify='space-between' gutter={[0, 0]}>
										<Col
											span={8}
											style={{
												...defaultStyles.header,
												textAlign: 'start',
												fontSize: 16,
											}}
										>
											Type
										</Col>
										<Col
											span={8}
											style={{
												...defaultStyles.header,
												textAlign: 'start',
												fontSize: 16,
											}}
										>
											Count
										</Col>
										<Col
											span={8}
											style={{
												...defaultStyles.header,
												textAlign: 'start',
												fontSize: 16,
											}}
										>
											Rarity
										</Col>
									</Row>
								</Col>
							</Row>
							<List
								itemLayout='vertical'
								dataSource={item.rarities}
								rowKey='name'
								renderItem={(item) => (
									<List.Item>
										<Row justify='space-between'>
											<Col xs={0} md={18} style={defaultStyles.subHeader}>
												{item.name}
											</Col>
											<Col xs={0} md={6}>
												<Row justify='space-between' gutter={[0, 0]}>
													<Col
														span={8}
														style={{
															...defaultStyles.subHeader,
															textAlign: 'start',
														}}
													>
														{item.type}
													</Col>
													<Col
														span={8}
														style={{
															...defaultStyles.subHeader,
															textAlign: 'start',
														}}
													>
														{_.floor(item.count)}
													</Col>
													<Col
														span={8}
														style={{
															...defaultStyles.subHeader,
															textAlign: 'start',
														}}
													>
														{_.round(item.rate * 100, 2).toFixed(2)}%
													</Col>
												</Row>
											</Col>
											<Col xs={24} md={0} style={defaultStyles.subHeader}>
												<span style={{ ...defaultStyles.header, fontSize: 12 }}>
													Name
												</span>{' '}
												<br /> {item.name}
											</Col>
											<Col xs={24} md={0}>
												<Row justify='space-between' gutter={[0, 0]}>
													<Col
														span={24}
														style={{
															...defaultStyles.subHeader,
															textAlign: 'start',
														}}
													>
														<span
															style={{ ...defaultStyles.header, fontSize: 12 }}
														>
															Type
														</span>{' '}
														<br /> {item.type}
													</Col>
													<Col
														span={24}
														style={{
															...defaultStyles.subHeader,
															textAlign: 'start',
														}}
													>
														<span
															style={{ ...defaultStyles.header, fontSize: 12 }}
														>
															Count
														</span>{' '}
														<br /> {_.floor(item.count)}
													</Col>
													<Col
														span={24}
														style={{
															...defaultStyles.subHeader,
															textAlign: 'start',
														}}
													>
														<span
															style={{ ...defaultStyles.header, fontSize: 12 }}
														>
															Rarity
														</span>{' '}
														<br /> {_.round(item.rate * 100, 2).toFixed(2)}%
													</Col>
												</Row>
											</Col>
										</Row>
									</List.Item>
								)}
							/>
						</Panel>
					);
				})}
			</Collapse>
		</AppLayout>
	);
};

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/traits');
};

export default Traits;
