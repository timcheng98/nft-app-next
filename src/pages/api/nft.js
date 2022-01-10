const clientModel = require('../../model/client')
const _ = require('lodash')

export default async function handler(req, res) {
  let data = {}

  if (req.method === 'POST') {
    const { nfts } = req.body;
    console.log(nfts)
    const promises = _.map(nfts, (item) => {
      return clientModel.getNFTsSingle(item)
    })

    data = await Promise.all(promises)
    console.log('allNfts', data)
  }

  res.json({
    status: 1,
    data
  })
}
