import axios from 'axios';
import AppLayout from '../components/AppLayout';

import { Row, Col, Button, Select, Divider } from 'antd';
import defaultStyles from '../core/theme/styles';
import _ from 'lodash';
import { CollectionItem } from './index';
import { DownCircleOutlined } from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import { getCustomStaticProps } from '../model/client';

const { Option } = Select;
const Marketplace = ({ collections }) => {
	const [loading, setLoading] = useState(false);
	const [rarities, setRarities] = useState(undefined);
	const [sortBy, setSortBy] = useState(1);
	const [filteredCollections, setFilteredCollections] = useState(collections);
	const [nfts, setNft] = useState(_.slice(filteredCollections, 0, 20));

	const loadMore = () => {
		let start = nfts.length;
		let end = start + 20;
		setLoading(true);
		setNft([...nfts, ..._.slice(filteredCollections, start, end)]);
		setLoading(false);
	};

	return (
		<AppLayout>
			<Row style={{ margin: '40px 0px 0px 0px' }}>
				<Col span={24} style={defaultStyles.banner}>
					Marketplace
				</Col>
				<Col xs={22} md={18} style={defaultStyles.subBody}>
					Crypto WallStreetBets are 9630 art pieces with a one-of-a-kind digital
					collection of various NFTs that are stored on the Polygon Blockchain.
					Each one has been meticulously created, hand-picked, and perfectly
					formed.
				</Col>
			</Row>
				<Divider />
			<Row align='middle' style={{ marginBottom: 40 }} gutter={[20, 0]}>
				<Col xs={12} md={4}>
					<span>Sort by</span>
					<Select
						className='app-select'
						value={sortBy}
						onChange={(value) => {
							setSortBy(value);
							// console.log(normalCollections)
							// console.log(reverseCollections)
							if (value === 1 || value === 3)
								setNft(_.slice(collections, 0, 20));
							if (value === 2 || value === 4)
								setNft(
									_.reverse(
										_.slice(
											collections,
											collections.length - 20,
											collections.length
										)
									)
								);
						}}
						size='large'
						placeholder='Sort By'
						style={{ width: '100%', borderRadius: 30 }}
					>
						<Option value={1}>ID: Low to High</Option>
						<Option value={2}>ID: High to Low</Option>
						<Option value={3}>Score: High to Low</Option>
						<Option value={4}>Score: Low to High</Option>
					</Select>
				</Col>
				<Col xs={12} md={4}>
					<span>Rarities</span>
					<Select
						className='app-select'
						value={rarities}
						onChange={(value) => {
							setRarities(value);
							// console.log(normalCollections)
							// console.log(reverseCollections)
							if (value === 1) {
								let filterd = _.filter(collections, (item) => item < 15);
								setFilteredCollections(filterd);
								setNft(_.slice(filterd, 0, 20));
								return;
							}

							if (value === 2) {
								let filterd = _.filter(
									collections,
									(item) => item >= 15 && item < 255
								);
								setFilteredCollections(filterd);
								setNft(_.slice(filterd, 0, 20));
								return;
							}

							let filterd = _.filter(collections, (item) => item >= 255);
							setFilteredCollections(filterd);
							setNft(_.slice(filterd, 0, 20));
						}}
						size='large'
						placeholder='Rarities'
						style={{ width: '100%', borderRadius: 30 }}
					>
						<Option value={1}>Super Rare</Option>
						<Option value={2}>Rare</Option>
						<Option value={3}>Original</Option>
					</Select>
				</Col>
				<Col xs={24} md={2}>
					<Button
						block
						style={{ marginTop: 24 }}
						onClick={() => {
							setRarities(null);
							setSortBy(null);
							setNft(_.slice(collections, 0, 20));
							setFilteredCollections(collections);
						}}
						className='app-button'
					>
						Reset
					</Button>
				</Col>
			</Row>
			<Row gutter={[20, 40]}>
				{_.map(nfts, (item) => {
					return (
						<Col key={item} xs={18} md={6} key={item}>
							<CollectionItem xs={24} md={24} item={item} />
						</Col>
					);
				})}
			</Row>
			<Row justify='center' style={{ margin: '30px 0px' }}>
				<Col xs={8} md={3}>
					<Button
						loading={loading}
						disabled={loading}
						onClick={() => loadMore()}
						icon={<DownCircleOutlined style={{ marginTop: 5, fontSize: 20 }} />}
						block
						style={{
							height: 50,
						}}
						className='app-button'
					>
						More
					</Button>
				</Col>
			</Row>
		</AppLayout>
	);
};

export const getStaticProps = async (context) => {
	return (getCustomStaticProps(context, '/marketplace'))
};

export default Marketplace;
