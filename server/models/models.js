const TimeTraveler = require('../mongodb.js');

exports.addTimeTraveler = (req) => {
  TimeTraveler({
    email: req.body.email,
    date: Date.now(),
    hash: req.body.hash
  }).save()
  .then((e) => {
    res.status(201).send(e);
  });
}
