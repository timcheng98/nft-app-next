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
	console.log(props);

	return (
		<AppLayout>
			<Header title={props.post.title} description={props.post.short_content} />
			<Row justify='center' style={{ marginTop: 40 }}>
				<Col xs={24} md={20}>
					<Row className='news-detail'>
						<Col style={{ textAlign: 'start' }} span={24}>
							{ReactHtmlParser(props.post.image)}
						</Col>
						<Col style={{ textAlign: 'start' }} span={24}>
							<h1 style={{ fontSize: 32 }}>{props.post.title}</h1>
						</Col>
						<Col
							style={{
								borderBottom: '5px solid rgb(40, 13, 95)',
								paddingBottom: 10,
								marginBottom: 30,
                overflow: 'hidden'
							}}
							span={18}
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
