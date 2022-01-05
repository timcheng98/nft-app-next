import store from '../redux/store';
import { fetchDataSuccess } from '../redux/data/dataActions';

const axios = require('axios');
const Web3 = require('web3');
let smartContract = require('../redux/blockchain/abi.json');

const web3 = new Web3(
  'https://polygon-mainnet.infura.io/v3/ed023da44d844719979806e32e0d8cd1'
);
const { rarity } = require('../core/rarity');
const _ = require('lodash');

const contractAddress = '0xec048A13b46c31d91701cB1791E860Aac9a8d11A';
const contract = new web3.eth.Contract(smartContract.abi, contractAddress);

export const getCustomStaticProps = async (
  { params },
  pathname,
  revalidate = 1
) => {
  let clientProps = {};
  const data = await blockchaindata();
  _.assign(clientProps, data);

  if (pathname === '/') {
    const totalSupply = await contract.methods.totalSupply().call();
    const { collections } = await getAllNFTs(totalSupply);
    let latest_nft = await getLatestNfts(totalSupply);
    let latestNFTs = _.map(latest_nft, (item) => {
      // console.log('item', item)
      // console.log('item', collections[item])
      return collections[item]
    })
    _.assign(clientProps, { latest_nft: latestNFTs });
  }
  if (pathname === '/marketplace') {
    const totalSupply = await contract.methods.totalSupply().call();
    const collections = await getAllNFTs(totalSupply);
    _.assign(clientProps, collections);
  }
  if (pathname === '/collection/[id]') {
    const collection = await getNFTsSingle(params.id);
    _.assign(clientProps, collection);
  }
  if (pathname === '/account') {
    const totalSupply = await contract.methods.totalSupply().call();
    const collections = await getAllNFTs(totalSupply);
    _.assign(clientProps, collections);
  }
  // if (pathname === '/traits') {
  // 	_.assign(clientProps, { rarity });
  // }

  return {
    props: {
      ...clientProps,
    },
    revalidate,
  };
};

const blockchaindata = async () => {
  let name = await contract.methods.name().call();

  let price = await contract.methods.cost().call();
  const amountToSend = web3.utils.fromWei(_.toString(price)); // Convert to wei value

  const total = await contract.methods.totalSupply().call();

  const airdrop = await contract.methods.airdrop_claimed().call();
  const total_airdrop = await contract.methods.TOTAL_AIRDROP_AMOUNT().call();
  const all_whitelist = await contract.methods.all_whitelist().call();

  const obj = {
    name,
    total: _.toInteger(total),
    price: _.toNumber(amountToSend),
    airdrop: _.toInteger(airdrop),
    total_airdrop: _.toInteger(total_airdrop),
    all_whitelist
  }
  // console.log(obj)
  return obj
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

  const resp = await axios.get(
    `http://api.squatpanda.online/api/creature?total=${_.toInteger(totalSupply)
    }`
  );

  console.log(resp.data.data);

  return {
    collections: _.keyBy(resp.data.data, 'edition'),
  };
};

const getNFTsSingle = async (id) => {
  // const resp = await axios.get('https://api.opensea.io/api/v1/asset/matic/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a/1/')

  const resp = await axios.get(
    `http://api.squatpanda.online/api/creature/${id}`
  );

  return {
    collection: resp.data,
  };
};

const getLatestNfts = async (totalSupply) => {
  let nfts = [];
  if (totalSupply <= 10) {
    for (let i = _.toInteger(totalSupply); i >= 1; i -= 1) {
      nfts.push(_.toInteger(i));
    }
  }

  if (totalSupply > 10) {
    let limit = _.toInteger(totalSupply) - 9;
    for (let i = _.toInteger(totalSupply); i >= limit; i -= 1) {
      nfts.push(_.toInteger(i));
    }
  }

  return nfts
};
