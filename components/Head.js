import Head from 'next/head';

import React from 'react';

const Header = ({ title = 'Crypto WallStreetBets NFT', description }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='https://www.wallstreetbets-nft.com/favicon.ico' />
				<link rel='apple-touch-icon' href='https://www.wallstreetbets-nft.com/apple-touch-icon.png' />
				<link rel='manifest' href='https://www.wallstreetbets-nft.com/manifest.json' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={description} />
				<meta property='og:title' content={title} key='title' />
				<meta
					property='og:image'
					content='https://www.wallstreetbets-nft.com/banner.png'
					key='image'
				/>
				<meta property='og:description' content={description} key='description' />
			</Head>
		</div>
	);
};

export default Header;
