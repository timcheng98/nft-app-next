
import { Row, Col, Input, Button, Form, Radio } from 'antd';
import axios from 'axios';
import AppLayout from '../../components/AppLayout';
import defaultStyles from '../../core/theme/styles';
import { getCustomStaticProps, getPostStaticPaths } from '../../model/posts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import Header from '../../components/Head';

const SingleNews = (props) => {
	const router = useRouter();

	return (
		<AppLayout>
			<Header title={props.post.title} description={props.post.short_content} />
			<Row justify='center' style={{ paddingTop: 80 }}>
				<Col xs={23} sm={18} md={14} lg={12}>
					<Row className='news-detail'>
						<Col className='news-images' style={{ textAlign: 'start', marginBottom: 30, backgroundColor: '#f5f5f5', borderRadius: 10, padding: '30px 20px' }} span={24}>
							{ReactHtmlParser(props.post.image)}
						</Col>
						<Col style={{ textAlign: 'start' }} span={24}>
							{/* <h1 style={{ fontSize: 26 }}>Overview</h1> */}
							<h1 style={{ fontSize: 24 }}>{props.post.title}</h1>
						</Col>
						<Col
							style={{
								borderBottom: '4px solid rgb(40, 13, 95, 0.8)',
								paddingBottom: 10,
								borderRadius: 4,
								marginBottom: 30,
                overflow: 'hidden'
							}}
							xs={24}
							md={12}
						>
							{ReactHtmlParser(props.post.short_content)}
						</Col>
						<Col span={24}>{ReactHtmlParser(props.post.content)}</Col>
					</Row>
				</Col>
			</Row>
		</AppLayout>
	);
};

export async function getStaticProps(context) {
	const props = await getCustomStaticProps(context, '/news/[id]');
	return props;
}

export async function getStaticPaths() {
	return getPostStaticPaths();
}
export default SingleNews;
