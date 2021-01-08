
// A Node.js Serverless Function as described here:
// - https://vercel.com/docs/serverless-functions/introduction
// - https://vercel.com/guides/handling-node-request-body
// - https://nodejs.org/ja/docs/guides/anatomy-of-an-http-transaction/#request-body

// Be careful to define `application/json` as the content type of the triggering webhook,
// otherwise the following code will not work
module.exports = (req, res) => {
  const { body } = req
  console.log(body.fields.heroImage['en-US'].sys)
  res.json(body)
}
