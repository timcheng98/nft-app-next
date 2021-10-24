// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios')

const handler = async (req, res) => {
  // const resp = await axios.get('https://api.opensea.io/api/v1/asset/matic/0xd44642a1693fabdb9fa9a0c61ee4abd2a916302a/1/')

  // console.log('web3', web3)
  

  const resp = await axios.get(`http://wallstreetbets-nft.com/api/creature/${req.query.id}`)
  res.json({
    status: 1,
    data: resp.data
  })
}

export default handler;
