import { Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd-mobile';

const { Panel } = Collapse;

const FAQ = () => {
	const [showChild, setShowChild] = useState(false);

	// Wait until after client-side hydration to show
	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		// You can show some kind of placeholder UI here
		return null;
	}

	return (
		<Row
			justify='center'
			style={{
				marginTop: 40,
				padding: '20px 0px',
				background: 'rgb(230, 253, 255)',
			}}
		>
			<Col
				xs={22}
				md={20}
				style={{
					border: '2px solid #fff',
					background: '#fff',
					margin: '30px 0px',
					borderRadius: 15,
					padding: '30px 30px',
				}}
			>
				<h1
					style={{
						color: '#2b2b2b',
						fontSize: 40,
						fontWeight: '600',
					}}
				>
					FAQs
				</h1>
				<Collapse>
					<Panel title='1. What is Squat Panda?' key='1'>
						<span style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
							Squat Panda are a curated boutique collection of only{' '}
							<strong>10,000</strong> hand drawn nft's.
							<br />
							<br />
							This is an inclusive collection and all Squat Panda were
							priced at <strong>100</strong> MATIC in the primary market to make
							it affordable for everyone to collect! This project is inspired by
							the Reddit's Squat Panda.
						</span>
					</Panel>
					<Panel
						title='2. How did the Squat Panda project get started?'
						key='2'
					>
						<span style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
							During many weeks of late nights and long weekends each Crypto
							Squat Panda was made individually in a vector based app,
							exported and uploaded to OpenSea.
							<br />
							<br />
							There must have been an easier way to do this, but the creator of
							the Squat Panda was new to the NFT space and just jumped
							in using the apps he was familiar with to make the Crypto
							Squat Panda's.
							<br />
							<br />
							The Squat Panda were made to be affordable for everyone
							and thus were listed at <strong>100</strong> MATIC in the primary
							market. Over the next couple of months all <strong>10,000</strong>{' '}
							Squat Panda were individually created.
							<br />
							<br />
							Then they started selling on the secondary market... and the rest
							is history. The ethos of the Squat Panda is to enjoy
							life, keep things light and most of all - have fun.
						</span>
					</Panel>
					<Panel title='3. What is an NFT?' key='3'>
						<span style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
							NFT stand for non-fungible token. Non-fungible means not
							interchangeable, so the value is not a set price but varies
							depending on how much someone or the market deems it is worth. The
							token part represents how it is stored and sold through a
							blockchain which is like a digital ledger.
							<br />
							<br />
							NFTs are a type of digital asset designed to show that someone has
							ownership of a unique virtual item, such as online pictures and
							videos.
						</span>
					</Panel>
					<Panel
						title='4. Where can I buy a Squat Panda NFT?'
						key='4'
					>
						<span style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
							OpenSea is the world's first & largest NFT marketplace.
							<br />
							<br />
							<a
								rel='noreferrer'
								style={{ color: '#1E90FF' }}
								href='https://opensea.io/collection/crypto-Squat Panda-nft'
								target='_blank'
							>
								Visit
							</a>{' '}
							The Squat Panda Marketplace on OpenSea: Buy, sell, and
							explore digital assets.
							<br />
							<br />
							In general, the process would be:
							<br />
							<br />
							1. You go to the online exchange and buy the NFT currency
							(normally Ethereum)
							<br />
							2. Find a NFT marketplace exchange that supports the NFT currency
							and exchange for the NFT
							<br />
							3. Store your NFT to a secured wallet
						</span>
					</Panel>
					<Panel title='5. Will more Squat Panda be minted?' key='5'>
						<span style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
							The Collection is limited to 10,000 mints max.All have been minted,
							the secondary market is the only way to obtain a Crypto
							Squat Panda for your collection.
						</span>
					</Panel>
					<Panel title='6. How do I get a NFT wallet?' key='6'>
						<span style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
							The first step in your NFT journey is to create a digital wallet
							where you'll securely store the crypto currency that is used to
							buy, sell, and create NFTs. The wallet also allows you to safely
							sign in and create accounts on NFT marketplaces.
							<br />
							<br />
							Wallet Suggestion - Metamask
						</span>
					</Panel>
				</Collapse>
			</Col>
		</Row>
	);
};

export default FAQ;
