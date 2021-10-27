import AppLayout from '../components/AppLayout';
import { Row, Col, Result, Button } from 'antd';
import defaultStyles from '../core/theme/styles';
import { useRouter } from 'next/router';

// pages/index.js
import Script from 'next/script';
import React from 'react';
import { getCustomStaticProps } from '../model/client';
import Header from '../components/Head';

export function TwitterScript() {
	return (
		<>
			<Script src='https://platform.twitter.com/widgets.js' />
		</>
	);
}
// pages/404.js
export default function News() {
	const router = useRouter();
	return (
		<AppLayout>
			<Header
				title='News | Crypto WallStreetBets NFT'
				description='Crypto WallStreetBets NFT - Share information the Crypto WallStreetBets NFT and share the latest news of the NTF industry'
			/>

			<TwitterScript />
			<Row align='middle' justify='center'>
				<Col
					span={24}
					style={{
						...defaultStyles.banner,
						margin: '20px 0px',
						textAlign: 'center',
					}}
				>
					Twitter News
				</Col>
				<Col xs={24} md={12}>
					<a
						className='twitter-timeline'
						data-width='100%'
						data-height='500'
						data-dnt='true'
						data-theme='light'
						href='https://twitter.com/NFT_WSB?ref_src=twsrc%5Etfw'
					>
						Tweets by NFT_WSB
					</a>
				</Col>
			</Row>
		</AppLayout>
	);
}

export const getStaticProps = async (context) => {
	return getCustomStaticProps(context, '/news');
};
