
const PostModel = require('../../model/posts')

export default async function handler(req, res) {

  if (req.body.email !== 'nft.wallstreetbets@gmail.com') return res.json({
    status: 1
  })
  if (req.method === 'POST') {
    await PostModel.createPost(req.body.id, req.body)
  }

  res.json({
    status: 1
  })
}