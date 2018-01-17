const model = require('../models/models.js');

exports.addTimeTraveler = (req) => {
  model.addTimeTraveler(req);
}

exports.getVideos = (req, res) => {
  model.getVideos(req, res);
}
