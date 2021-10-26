const axios = require('axios');
const Web3 = require('web3');
let abi = require('../redux/blockchain/abi.json');
const web3 = new Web3(
	'https://polygon-mainnet.infura.io/v3/1106a734eb1a46639b820d23e971c3a6'
);

const _ = require('lodash');

const contractAddress = '0xd44642A1693faBdB9fa9a0C61Ee4ABd2a916302A';
const contract = new web3.eth.Contract(abi, contractAddress);

export const getCustomStaticProps = async (context) => {
	let clientProps = {};
  const totalSupply = await contract.methods.totalSupply().call();

	const latestNFTs = await getLatestNfts(totalSupply);
	const collections = await getAllNFTs(totalSupply);
	clientProps = {
		...clientProps,
    ...latestNFTs,
		...collections,
	};

	return {
		props: {
			...clientProps,
		},
    revalidate: 60 * 60 // 1 hour
	};
};

export const getCustomServerSideProps = async (req, res) => {
	// console.log(req);
	// console.log(res);
	return {
		props: {
			test: 123,
		},
	};
};

const getAllNFTs = async (totalSupply) => {
  // const resp = await axios.get('https://api.opensea.io/api/v1/asset/matic/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a/1/')

  // console.log('totalSupply', totalSupply)
  const resp = await axios.get(
    `http://wallstreetbets-nft.com/api/creature?total=${totalSupply}`
  );

  return {
    collections: _.map(resp.data.data, 'edition')
  }
};

const getLatestNfts = async (totalSupply) => {
	let nfts = [];
	if (totalSupply <= 9) {
		for (let i = totalSupply; i >= 0; i -= 1) {
			nfts.push(_.toInteger(i));
		}
	}

	if (totalSupply > 9) {
		let limit = totalSupply - 8;
		for (let i = totalSupply - 1; i >= limit; i -= 1) {
			nfts.push(_.toInteger(i));
		}
	}

	return { latest_nfts: nfts };
};
