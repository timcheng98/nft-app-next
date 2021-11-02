import Head from 'next/head';

import React from 'react';

const Header = ({ title = 'Crypto WallStreetBets NFT', description }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={description} />
				<meta property='og:title' content={title} key='title' />
				<meta property='og:image' content='/banner.png' key='image' />
				<meta charset="UTF-8" /> 
				<meta name="robots" content="noindex,nofollow" />
				<meta property='og:type' content='article' />
				<meta property='og:url' content='https://wallstreetbets-nft.com' />
				<meta property='og:site_name' content='Crypto WallStreetBets NFT' />
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
					content='/banner.png'
					key="twitter:image"
				/>
			</Head>
		</div>
	);
};

export default Header;
