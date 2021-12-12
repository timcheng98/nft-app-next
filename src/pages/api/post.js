const PostModel = require('../../model/posts')

export default async function handler(req, res) {
  let data = {}
  if (req.method === 'GET') {
    if (req.query.id) {
      data = await PostModel.getSinglePost(req.query.id)
    } else {
      data = await PostModel.getPosts()
    }
  }

  if (req.method === 'POST') {
    if (req.body.email !== 'nft.squatpanda@gmail.com') {
      return res.json({
        status: 1
      })
    }
    await PostModel.createPost(req.body.id, req.body)
  }

  res.json({
    status: 1,
    data
  })
}
