
const PostModel = require('../../../model/posts')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await PostModel.createPost(req.query.id, req.body)
  }

  res.json({
    status: 1
  })
}