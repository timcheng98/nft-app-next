import { Row, Col, Input, Button, Form } from 'antd';
import axios from 'axios';
import AppLayout from '../../../components/AppLayout';
import defaultStyles from '../../../core/theme/styles';
import { getCustomStaticProps, getPostStaticPaths } from '../../../model/posts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const Tinymce = dynamic(() => import( '../../../components/Tinymce'))


import { useSession } from "next-auth/client";


const SingleNews = (props) => {
  const [session] = useSession()
	const router = useRouter()
  const [form] = Form.useForm()
  const [value, setValue] = useState(props?.post?.content ?? '')

  useEffect(() => {
    console.log(props.post)
    form.setFieldsValue(props.post)
  }, [props.post])

	useEffect(() => {

		if (!session) return;

		if (session.user.email !== "nft.wallstreetbets@gmail.com") {
			router.push('/')
		}
	}, [session])

  const onFinish = async (values) => {
    await axios.post(`/api/post/${props.post.id}`, values)

    router.push('/admin/news')
  }

	return (
		<AppLayout>
			<Row justify='center' align="middle" style={{ minHeight: '60vh' }}>
				<Col xs={24} md={18}>
				<Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
        >
          <Button style={{ margin: '30px 0px' }} className="app-button" onClick={() => router.push('/admin/news')}>Go Back</Button>
          <Form.Item
          name="title"
          label="Title"
          
          >
            <Input className="input-button" 	style={{
									height: 40,
									borderRadius: 15,
									...defaultStyles.subHeader,
								}} />
          </Form.Item>
          <Form.Item
          name="content"
          label="Content"
          >
          <Tinymce 
            initialValue={props.post.content}
            setValue={(value) => form.setFieldsValue({ content: value })}
           />
          </Form.Item>
          
          <Form.Item>
            <Button
            htmlType="submit"
            className="app-button"
            >Submit</Button>
          </Form.Item>
        </Form>
				</Col>
			</Row>
		</AppLayout>
	);
};

export async function getStaticProps(context) {
	const props = await getCustomStaticProps(context, '/news/[id]')
  return props
}

export async function getStaticPaths() {
  return getPostStaticPaths()
}
export default SingleNews;
