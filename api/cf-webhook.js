
// A Node.js Serverless Function as described here:
// - https://vercel.com/docs/serverless-functions/introduction
// - https://vercel.com/guides/handling-node-request-body
// - https://nodejs.org/ja/docs/guides/anatomy-of-an-http-transaction/#request-body
module.exports = (req, res) => {
  console.log(req)

  let body = []
  req.on('data', (chunk) => {
    body.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    // at this point, `body` has the entire request body stored in it as a string

    console.log(body)

    // ping pong
    res.json(req)
  })
}
