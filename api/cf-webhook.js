
// A Node.js Serverless Function as described here:
// https://vercel.com/docs/serverless-functions/introduction
module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}
