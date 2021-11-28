import { Row, Col, Input, Button, Form } from 'antd';
import axios from 'axios';
import AppLayout from '../../components/AppLayout';
import defaultStyles from '../../core/theme/styles';
import { getCustomStaticProps } from '../../model/client';
import { signIn, useSession } from "next-auth/client";
import {useRouter} from 'next/router';


// import { useSession, getSession } from 'next-auth/client'


const Login = () => {
	// const [ session, loading ] = useSession()

	// if (typeof window !== 'undefined' && loading) return null

	const router = useRouter()
	const [session] = useSession();
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		await axios.post('/api/login', values)
		router.push('/admin/news')
	};
	return (
		<AppLayout>
			<Row justify='center' align="middle" style={{ minHeight: '60vh' }}>
				<Col span={8}>
					<h1 style={{
						...defaultStyles.banner,
						textAlign: 'center',
						margin: '30px 0px'
					}}>Login</h1>
					<Form form={form} layout='vertical' onFinish={onFinish}>
						<Form.Item  name="mobile" label="mobile">
							<Input className='input-button' style={{
								height: 54,
								borderRadius: 15,
								...defaultStyles.subHeader,
							}} placeholder="Mobile" />
						</Form.Item>
						<Form.Item name="password" label="password">
							<Input.Password  className="input-button" style={{
								height: 54,
								borderRadius: 15,
								...defaultStyles.subHeader,
							}} placeholder="Password" />
						</Form.Item>
						<Form.Item>
							<Button
							// href="/api/auth/signin"
							onClick={(e) => {
							e.preventDefault()
							signIn()
							router.push('/admin/news')

					 }}
								// htmlType="submit"
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
