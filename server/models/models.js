const Event = require('../mongodb.js');

exports.addTimeTraveler = (req) => {
  TimeTraveler({
    email: req.body.email,
    date: req.body.date,
    hash: req.body.hash
  }).save()
  .then((e) => {
    res.status(201).send(e);
  });
}
