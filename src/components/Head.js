import Head from 'next/head';

import React from 'react';

const Header = ({ title = 'Squat Panda', description }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='https://www.squatpanda.online/favicon.ico' />
				<link rel='apple-touch-icon' href='https://www.squatpanda.online/apple-touch-icon.png' />
				<link rel='manifest' href='https://www.squatpanda.online/manifest.json' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={description} />
				<meta property='title' content={`🐼 ${title}`}/>
				<meta property='og:title' content={`🐼 ${title}`} key='title' />
				<meta charSet="UTF-8" /> 
				<meta name="robots" content="noindex,nofollow" />
				<meta property='og:type' content='article' />
				<meta property='og:url' content='https://squatpanda.online' />
				<meta property='og:image' content='https://squatpanda.online/banner.jpg' />
				<meta property='og:site_name' content='Squat Panda NFT' />
				<link rel="shortcut icon" href="https://www.squatpanda.online/logo.png" />
				<meta
					property='og:description'
					content={description}
					key='description'
				/>
				<meta name='twitter:card' content='summary' />
				<meta
					name='twitter:title'
					content={title}
					key="twitter:title"
				/>
				<meta
					name='twitter:description'
					content={description}
					key="twitter:description"
				/>
				<meta
					name='twitter:image'
					content='https://www.squatpanda.online/banner.jpg'
					key="twitter:image"
				/>
			</Head>
		</div>
	);
};

export default Header;
