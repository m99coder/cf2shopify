
// A Node.js Serverless Function as described here:
// - https://vercel.com/docs/serverless-functions/introduction
// - https://vercel.com/guides/handling-node-request-body
// - https://nodejs.org/ja/docs/guides/anatomy-of-an-http-transaction/#request-body
module.exports = (req, res) => {
  console.log(req)

  let body = ''
  req.on('data', (chunk) => {
    body += chunk.toString('utf8')
  })

  req.on('end', () => {
    console.log(body)
    let json = JSON.parse(body)
    console.log(json)
    res.json(json)
  })
}
