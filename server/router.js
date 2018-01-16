const express = require('express');
const router = express.Router();
const controller = require('./controllers/controllers.js')

router
  .post('/happyending', (req, res) => {
    controller.addTimeTraveler(req);
  })

module.exports = router;
