// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require("axios");
const Web3 = require("web3");
let abi = require("../../redux/blockchain/abi.json");
const web3 = new Web3(
  "https://polygon-mainnet.infura.io/v3/1106a734eb1a46639b820d23e971c3a6"
);

const _ = require("lodash");

const contractAddress = "0xd44642A1693faBdB9fa9a0C61Ee4ABd2a916302A";
const contract = new web3.eth.Contract(abi, contractAddress);

const handler = async (req, res) => {
  // const resp = await axios.get('https://api.opensea.io/api/v1/asset/matic/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a/1/')

  const totalSupply = await contract.methods.totalSupply().call();
  // console.log('totalSupply', totalSupply)
  const resp = await axios.get(
    "http://wallstreetbets-nft.com/api/creature/112"
  );
  let nfts = [];
  if (totalSupply <= 9) {
    for (let i = totalSupply; i >= 0; i -= 1) {
      nfts.push(_.toInteger(i));
      // nfts.push(axios.get(`https://wallstreetbets-nft.com/api/creature/${i}`));
    }
  }

  if (totalSupply > 9) {
    let limit = totalSupply - 8;
    for (let i = totalSupply - 1; i >= limit; i -= 1) {
      nfts.push(_.toInteger(i));
      // nfts.push(axios.get(`https://wallstreetbets-nft.com/api/creature/${i}`));
    }
  }
  console.log("home api");
  res.json({
    status: 1,
    data: nfts,
  });
};

export default handler;
