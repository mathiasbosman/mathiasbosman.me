/*
This file is used by Heroku to spin up a Node.js server
 */
const path = require(`path`);
const express = require(`express`);
const port = process.env.PORT || 3000;
const node = process.env.NODE_ENV;
const app = express();
const rateLimit = {windowMs: 60 * 1000, max: 100}

// redirect to https if possible
console.debug(`Server node is ${node}`)
if (node === `production`) {
  console.log(`Server will redirect to https`)
  app.use((req, res, next) => {
    if (req.header(`x-forwarded-proto`) !== `https`) {
      res.redirect(`https://${req.header(`host`)}${req.url}`)
    } else {
      next()
    }
  })
}

const publicPath = path.join(__dirname, `..`, `build`)
app.use(express.static(publicPath))

// setup rate limiter
const rateLimiter = require(`express-rate-limit`)
const limiter = rateLimiter(rateLimit)
console.log(`App setup with rate limiter`)
app.use(limiter)

// make sure everything is routed to index.html
app.get(`*`, (req, res) => {
  res.sendFile(path.join(publicPath, `index.html`))
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});