
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));

// set up rate limiter: maximum of five requests per minute
const RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100
});
app.use(limiter);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

console.log(`Server node is ${process.env.NODE_ENV}!`);
if(process.env.NODE_ENV === 'production') {
  console.log(`Server will redirect to https`);

  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}