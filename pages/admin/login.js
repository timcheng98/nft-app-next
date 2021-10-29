import { Row, Col, Input, Button, Form } from 'antd';
import AppLayout from '../../components/AppLayout';
import { getCustomStaticProps } from '../../model/client';

const Login = () => {
	const [form] = Form.useForm();

	const onFinish = async () => {};
	return (
		<AppLayout>
			<Row justify='center'>
				<Col span={12}>
					<Form form={form} layout='vertical' onFinish={onFinish}>
						<Form.Item>
							<Input />
						</Form.Item>
						<Form.Item>
							<Input />
						</Form.Item>
						<Form.Item>
							<Button className='app-button'>Login</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</AppLayout>
	);
};

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/admin/login');
};

export default Login;
