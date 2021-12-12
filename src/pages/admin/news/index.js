import { Row, Col, Input, Button, Form, Table } from 'antd';
import axios from 'axios';
import AppLayout from '../../../components/AppLayout';
// import defaultStyles from '../../../core/theme/styles';
// import { getCustomStaticProps } from '../../../model/posts';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { EditOutlined, CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { useSession } from 'next-auth/client';
import ReactHtmlParser from 'react-html-parser';
import { NewsForm } from './news_form';

const NewsList = (props) => {
	const [session] = useSession();
	const router = useRouter();
	useEffect(() => {
		if (!session) return;

		// if (session.user.email !== 'nft.squatpanda@gmail.com') {
		// 	router.push('/');
		// }
	}, [session]);

	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const resp = await axios.get('/api/post');
		setDataSource(_.orderBy(resp.data.data, 'is_active', 'desc'))
	};

	const [form] = Form.useForm();

	const getColumns = () => {
		return [
			{
				title: 'Operation',
				dataIndex: 'id',
				render: (value, record) => {
					return (
						<Row gutter={[8, 0]}>
							<Col>
								<Button
									onClick={() => {
										router.push(`/admin/news/news_form?id=${value}`);
									}}
									type='default'
									icon={<EditOutlined />}
									shape='circle'
								/>
							</Col>
							<Col>
								<Button
									onClick={async () => {
										await axios.post(`/api/post`, {
											...record,
											email: session.user.email,
											is_active: _.toInteger(!record.is_active)
										});
										getData()								
									}}
									type={record.is_active ? 'primary' : 'default'}
									icon={<CheckOutlined />}
									shape='circle'
								/>
							</Col>
							<Col>
								<Button
									onClick={async () => {
										await axios.post(`/api/post`, {
											...record,
											email: session.user.email,
											is_active: _.toInteger(!record.is_active),
											delete: 'True'
										});
										getData()								
									}}
									danger
									icon={<DeleteOutlined />}
									shape='circle'
								/>
							</Col>
						</Row>
					);
				},
			},
			{
				title: 'ID',
				dataIndex: 'id',
				key: 'id',
			},
			{
				title: 'Title',
				dataIndex: 'title',
				key: 'title',
				width: 200,
			},
			{
				title: 'Image',
				dataIndex: 'image',
				key: 'image',
				render: (value) => {
					return (
						<div
							className='news-images'
							style={{
								maxHeight: 300,
								maxWidth: 200,
								overflowY: 'scroll',
								overflowX: 'hidden',
							}}
						>
							{ReactHtmlParser(value)}
						</div>
					);
				},
				// width: 600
			},
			{
				title: 'Short Content',
				dataIndex: 'short_content',
				key: 'short_content',
				render: (value) => {
					return (
						<div
							style={{
								maxHeight: 300,
								maxWidth: 600,
								minWidth: 200,
								overflowY: 'scroll',
								overflowX: 'hidden',
							}}
						>
							{ReactHtmlParser(value)}
						</div>
					);
				},
				// width: 600
			},
			{
				title: 'Content',
				dataIndex: 'content',
				key: 'content',
				render: (value) => {
					return (
						<div
							style={{
								maxHeight: 300,
								maxWidth: 600,
								minWidth: 200,
								overflowY: 'scroll',
								overflowX: 'hidden',
							}}
						>
							{ReactHtmlParser(value)}
						</div>
					);
				},
				// width: 600
			},
			{
				title: 'Updated Time',
				dataIndex: 'utime',
				key: 'utime',
				render: (value) => {
					return moment.unix(value).format('YYYY-MM-DD HH:mm:ss');
				},
			},
			{
				title: 'Created Time',
				dataIndex: 'ctime',
				key: 'ctime',
				render: (value) => {
					return moment.unix(value).format('YYYY-MM-DD HH:mm:ss');
				},
			},
		];
	};

	return (
		<AppLayout>
			<Row justify='center' style={{ minHeight: '80vh', paddingTop: 100 }}>
				<Col xs={24} md={22}>
				
						<Button

					  	style={{
							height: 40, 
							width: 100, borderRadius: 10, backgroundColor: 'transparent', color: '#000', marginBottom: 20  }}
						onClick={() => router.push('/admin/news/news_form')} className='app-button'>
							Create
						</Button>
						<Table
							scroll={{
								x: 'max-content',
							}}
							rowKey='id'
							dataSource={dataSource}
							columns={getColumns()}
						/>
				</Col>
			</Row>
		</AppLayout>
	);
};

export async function getStaticProps(context) {
	return {
		props: {}
	};
}
export default NewsList;
