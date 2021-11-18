import AppLayout from '../components/AppLayout';
import { Row, Col, Result, Button } from 'antd';
import defaultStyles from '../core/theme/styles';
import { useRouter } from 'next/router';
import React from 'react';
import { getCustomStaticProps } from '../model/client';
import Header from '../components/Head';
// pages/404.js
export default function Custom404() {
	const router = useRouter();
	return (
		<AppLayout>
			<Header
				title='404 | Squat Panda'
				description='Page not found'
			/>

			<Row style={{ height: '70vh' }} align='middle' justify='center'>
				<Col>
					<Result
						status='404'
						title={<span style={defaultStyles.banner}>404</span>}
						subTitle={
							<p style={defaultStyles.header}>
								Sorry, the page you visited does not exist.
							</p>
						}
						extra={
							<Button
								onClick={() => router.push('/')}
								className='app-button'
								style={{ width: 200, height: 50 }}
							>
								Back Home
							</Button>
						}
					/>
				</Col>
			</Row>
		</AppLayout>
	);
}

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/404');
};
