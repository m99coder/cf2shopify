
// A Node.js Serverless Function as described here:
// - https://vercel.com/docs/serverless-functions/introduction
// - https://vercel.com/guides/handling-node-request-body
// - https://nodejs.org/ja/docs/guides/anatomy-of-an-http-transaction/#request-body

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'i9tbzaqi38hy',
  accessToken: process.env.CF_CDA_ACCESS_TOKEN
})

// Be careful to define `application/json` as the content type of the triggering webhook,
// otherwise the following code will not work
module.exports = async (req, res) => {
  const { body } = req
  const asset = await client.getAsset(body.fields.heroImage['en-US'].sys.id)
  res.json(asset)
}
