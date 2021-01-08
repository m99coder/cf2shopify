
// A Node.js Serverless Function as described here:
// - https://vercel.com/docs/serverless-functions/introduction
// - https://vercel.com/guides/handling-node-request-body
module.exports = async (req, res) => {
  const { body } = req
  console.log(body)
  res.send(`Hello ${body.sys.id}, you just parsed the request body`)
}
