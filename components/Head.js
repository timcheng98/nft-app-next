import Head from 'next/head';

import React from 'react';

const Header = ({ title = 'Crypto WallStreetBets NFT', description }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
				<link rel='apple-touch-icon' href='%PUBLIC_URL%/apple-touch-icon.png' />
				<link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={description} />
				<meta property='og:title' content={title} key='title' />
				<meta
					property='og:image'
					content='%PUBLIC_URL%/banner.png'
					key='image'
				/>
				<meta property='og:description' content={description} key='description' />
			</Head>
		</div>
	);
};

export default Header;
