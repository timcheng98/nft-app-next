import AppLayout from '../../components/AppLayout';
import { Row, Col, Result, Button, Typography } from 'antd';
import defaultStyles from '../../core/theme/styles';
import { useRouter } from 'next/router';

// pages/index.js
import Script from 'next/script';
import React from 'react';
import { getCustomStaticProps } from '../../model/posts';
import Header from '../../components/Head';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';
import Link from 'next/link';

export function TwitterScript() {
	return (
		<>
			<Script src='https://platform.twitter.com/widgets.js' />
		</>
	);
}
// pages/404.js
export default function News(props) {
	console.log(props);
	const router = useRouter();
	return (
		<AppLayout>
			<Header
				title='News | Crypto WallStreetBets NFT'
				description='Crypto WallStreetBets NFT - Share information the Crypto WallStreetBets NFT and share the latest news of the NTF industry'
			/>

			<Row
				justify='center'
				className='news-list'
				style={{ margin: '50px 0px' }}
			>
				<Col span={20}>
					<Row justify='space-between' gutter={[10, 0]}>
						{_.map(props.posts, (item) => {
							return (
								<Col
									className='news'
									key={item.id}
									md={7}
									xs={24}
									style={{
										borderBottom: '5px solid rgb(40, 13, 95)',
										paddingBottom: 10,
										marginBottom: 40
									}}
								>
									<Link href={`/news/${item.id}`}>
										<Row gutter={[0, 10]} justify='center'>
											<Col span={24} style={{ borderRadius: 30 }}>
												{ReactHtmlParser(item.image)}
											</Col>
											<Col span={24}>
												<Typography.Paragraph
													ellipsis={{
														rows: 3,
														symbol: '...',
														expandable: false,
													}}
													style={{
														overflow: 'hidden'
													}}
												>
													<div><h4 className='short-content'>{item.title}</h4></div>
												</Typography.Paragraph>
											</Col>
											<Col span={24} >
												<Typography.Paragraph
													ellipsis={{
														rows: 4,
														symbol: '...',
														expandable: false,
													}}
												>
													<div className='short-content'>{ReactHtmlParser(item.short_content)}</div>
												</Typography.Paragraph>
											</Col>
										</Row>
									</Link>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
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
	return getCustomStaticProps(context, '/news/index');
};
