import { Row, Col, Input, Button, Form, Radio } from 'antd';
import axios from 'axios';
import AppLayout from '../../../components/AppLayout';
import defaultStyles from '../../../core/theme/styles';
// import { getCustomStaticProps, getPostStaticPaths } from '../../../model/posts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import _ from 'lodash';
const Tinymce = dynamic(() => import('../../../components/Tinymce'));

import { useSession } from 'next-auth/client';

const SingleNews = (props) => {
	const router = useRouter();

	return (
		<AppLayout>
			<NewsForm post={props.post} goBack={() => router.push('/admin/news')} />
		</AppLayout>
	);
};

export const NewsForm = ({ goBack }) => {
	const [session] = useSession();
	const router = useRouter();
	const [form] = Form.useForm();
	const [post, setPost] = useState({})

	useEffect(() => {
		if (!router.query?.id) return;
		getData();
	}, []);

	const getData = async () => {
		const resp = await axios.get(`/api/post?id=${router.query.id}`);
		setPost(resp.data.data)
		form.setFieldsValue({
			...resp.data.data,
		});
	};

	useEffect(() => {
		if (!session) return;
	}, [session]);

	const onFinish = async (values) => {
		await axios.post(`/api/post`, {
			...values,
			delete: 'False',
			id: post?.id ?? undefined,
			email: session.user.email,
		});

		goBack();
		router.push('/admin/news');
	};

	return (
		<Row justify='center' align='middle' style={{ minHeight: '60vh' }}>
			<Col xs={24} md={14}>
				<Form onFinish={onFinish} form={form} layout='vertical'>
					<Button
						style={{ margin: '30px 0px' }}
						className='app-button'
						onClick={goBack}
					>
						Go Back
					</Button>
					<Form.Item name='is_active' label='Status' initialValue={1}>
						<Radio.Group>
							<Radio value={1}>Active</Radio>
							<Radio value={0}>In Active</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item name='title' label='Title'>
						<Input
							className='input-button'
							style={{
								height: 40,
								borderRadius: 15,
								...defaultStyles.subBody,
							}}
						/>
					</Form.Item>
					<Form.Item name='image' label='Image'>
						<Tinymce
							height={300}
							initialValue={post.image}
							setValue={(value) => form.setFieldsValue({ image: value })}
						/>
					</Form.Item>
					<Form.Item name='short_content' label='Short Content'>
						<Tinymce
							height={200}
							initialValue={post.short_content}
							setValue={(value) =>
								form.setFieldsValue({ short_content: value })
							}
						/>
					</Form.Item>
					<Form.Item name='content' label='Content'>
						<Tinymce
							initialValue={post.content}
							setValue={(value) => form.setFieldsValue({ content: value })}
						/>
					</Form.Item>

					<Form.Item>
						<Button htmlType='submit' className='app-button'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};

export async function getStaticProps(context) {
	// const props = await getCustomStaticProps(context, '/news/[id]', 1);
	// return props;
	return {
		props: {},
	};
}

export default SingleNews;
