const express = require('express');
const router = express.Router();
const controller = require('./controllers/controllers.js')

router
  .post('/happyending', (req, res) => {
    controller.addTimeTraveler(req);
  })
  .get('/videos', (req, res) => {
    controller.getVideos(req, res)
  })

module.exports = router;
