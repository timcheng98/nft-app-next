const axios = require('axios');
const Web3 = require('web3');
let smartContract = require('../redux/blockchain/abi.json');
const web3 = new Web3(
	'https://polygon-mumbai.infura.io/v3/ed023da44d844719979806e32e0d8cd1'
);
const { rarity } = require('../core/rarity');
const _ = require('lodash');

const contractAddress = '0x5355b496F09bE260779a4E7CA6BC631D30bbAd96';
const contract = new web3.eth.Contract(smartContract.abi, contractAddress);

export const getCustomStaticProps = async ({ params }, pathname) => {
	let clientProps = {};
	// console.log(object)

	if (pathname === '/') {
		// console.log('contract', contract.methods.totalSupply().call)
		const totalSupply = await contract.methods.totalSupply().call();
		const latestNFTs = await getLatestNfts(totalSupply);
		_.assign(clientProps, latestNFTs);
	}
	if (pathname === '/marketplace') {
		const totalSupply = await contract.methods.totalSupply().call();
		const collections = await getAllNFTs(totalSupply);
		console.log('collections', collections)
		_.assign(clientProps, collections);
	}
	if (pathname === '/collection/[id]') {
		const collection = await getNFTsSingle(params.id);
		_.assign(clientProps, collection);
	}
	// if (pathname === '/traits') {
	// 	_.assign(clientProps, { rarity });
	// }

	return {
		props: {
			...clientProps,
		},
		revalidate: 60 * 60, // 1 hour
	};
};


export async function getCustomStaticPaths() {
	let totalSupply = await contract.methods.totalSupply().call();
	const paths = _.times(_.toInteger(totalSupply) + 1, (item) => {
		return {
			params: { id: `${item}` },
		};
	});

	return { paths, fallback: false };
}

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

	console.log('totalSupply', totalSupply)
	// console.log('totalSupply', totalSupply)
	const resp = await axios.get(
		`http://api.squatpanda.online/api/creature?total=${totalSupply}`
	);

	return {
		collections: _.map(resp.data.data, 'edition'),
	};
};

const getNFTsSingle = async (id) => {
	// const resp = await axios.get('https://api.opensea.io/api/v1/asset/matic/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a/1/')

	// console.log('totalSupply', totalSupply)

	const resp = await axios.get(
		`http://api.squatpanda.online/api/creature/${id}`
	);

	return {
		collection: resp.data,
	};
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
