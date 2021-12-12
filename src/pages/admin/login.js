import { Row, Col, Input, Button, Form } from 'antd';
import axios from 'axios';
import AppLayout from '../../components/AppLayout';
import defaultStyles from '../../core/theme/styles';
import { getCustomStaticProps } from '../../model/client';
import { signIn, useSession } from "next-auth/client";
import {useRouter} from 'next/router';
import React, { useEffect } from 'react'


// import { useSession, getSession } from 'next-auth/client'


const Login = () => {
	// const [ session, loading ] = useSession()

	// if (typeof window !== 'undefined' && loading) return null

	const router = useRouter()
	const [session] = useSession();
	const [form] = Form.useForm();

	useEffect(() => {
		console.log(session)
		if (session?.user) {
			router.push('/admin/news')
			return 
		}
		console.log(session)
	}, [session])

	const onFinish = async (values) => {
		signIn()
	};
	
	return (
		<AppLayout>
			<Row justify='center' align="middle" style={{ minHeight: '60vh' }}>
				<Col span={8}>
					<Form form={form} layout='vertical' onFinish={onFinish}>
						<Form.Item>
							<Button
								htmlType="submit"
								style={{
									height: 50,
									borderRadius: 15,
									fontSize: 20
								}} block className='app-button'>Login</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</AppLayout>
	);
};

// export async function getServerSideProps(context) {
//   const session = await getSession(context)

//   return {
//     props: {
//       session
//     }
//   }
// }
export default Login;
