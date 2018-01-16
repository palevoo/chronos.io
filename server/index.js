const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;
const router = require('./router.js');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  })
  .use(router)
  .listen(port, () => console.log(`Listening on port ${port}`))
