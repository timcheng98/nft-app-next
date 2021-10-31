export default function handler(req, res) {
  console.log(req.method)

  if (req.method === 'POST') {
    console.log(req.body)
  }

  res.json({
    status: 1
  })
}