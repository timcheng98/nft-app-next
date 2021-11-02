import { Row, Col, Input, Button, Form, Table } from 'antd';
// import axios from 'axios';
import AppLayout from '../../../components/AppLayout';
// import defaultStyles from '../../../core/theme/styles';
import { getCustomStaticProps } from '../../../model/posts';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import _ from 'lodash'
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import React, {useState} from 'react'
import moment from 'moment'

import { useSession } from "next-auth/client";
import ReactHtmlParser from 'react-html-parser';
import { NewsForm } from './[id]';


const NewsList = (props) => {
  const [session] = useSession()
	const router = useRouter()
	const [visible, setVisible] = useState(false)
	useEffect(() => {

		if (!session) return;

		if (session.user.email !== "nft.wallstreetbets@gmail.com") {
			router.push('/')
		}
	}, [session])

	const [form] = Form.useForm();

	const getColumns = () => {
		return [  
			{
				title: 'Operation',
				dataIndex: 'id',
				render: (value, key) => {
					return (
						<Row gutter={[8, 0]}>
							<Col>
							<Button 
							onClick={() => {
								router.push(`/admin/news/${value}`)
							}}
									type="primary" 
									icon={<EditOutlined />}
									shape="circle" 
								/>

							</Col>
							<Col>
							<Button 
							onClick={() => {
								router.push(`/admin/news/${value}`)
							}}
									type="primary" 
									icon={<CheckOutlined />}
									shape="circle" 
								/></Col>
						</Row>
					)
				}
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
			},
			{
			title: 'Short Content',
			dataIndex: 'short_content',
			key: 'short_content',
			render: (value) => {
				return <div style={{ maxHeight: 300, maxWidth: 600, overflowY: 'scroll', overflowX: 'hidden' }}>{ReactHtmlParser(value)}</div>
			},
			// width: 600
			},
			{
			title: 'Content',
			dataIndex: 'content',
			key: 'content',
			render: (value) => {
				return <div style={{ maxHeight: 300, maxWidth: 600, overflowY: 'scroll', overflowX: 'hidden' }}>{ReactHtmlParser(value)}</div>
			},
			// width: 600
			},
			{
			title: 'Updated Time',
			dataIndex: 'utime',
			key: 'utime',
			render: (value) => {
				return moment.unix(value).format('YYYY-MM-DD HH:mm:ss')
			}
			},
			{
			title: 'Created Time',
			dataIndex: 'ctime',
			key: 'ctime',
			render: (value) => {
				return moment.unix(value).format('YYYY-MM-DD HH:mm:ss')
			}
			},
	]
	}

	return (
		<AppLayout>
			<Row justify='center' align="middle" style={{ minHeight: '80vh' }}>

				<Col xs={24} md={22}>
				{!visible && <Button onClick={() => setVisible(true)} className="app-button">Create</Button>}

				{visible ? 	<NewsForm goBack={() => setVisible(false)} /> :
					<Table
					scroll={{
						x: 'max-content'
					}}
					rowKey="id"
					dataSource={props.posts} columns={getColumns()} />
				}
				</Col>
			</Row>
		</AppLayout>
	);
};

export async function getStaticProps(context) {
	const props = await getCustomStaticProps(context, '/news/index', 1)
  return props
}
export default NewsList;
