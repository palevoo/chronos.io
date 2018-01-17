const TimeTraveler = require('../mongodb.js');
const _ = require('lodash');

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

let tenYears = 315400000010;
let hour = 3600000;
//
// getTimeTravelers = async () => {
//   let res = TimeTraveler.find()
//     .then ((res) => {
//       console.log(res);
//       let readyOnes = _.filter(res, function(o) {
//         return (o.date + tenYears) < Date.now();
//       });
//       console.log('READY',readyOnes);
//
//     })
// }

exports.getVideos = async (req, res) => {
  let events = await TimeTraveler.find()
    .then((results) => {
      res.status(200).send(results);
    });
}

deleteEvents = async (req, res) => {
  let events = await TimeTraveler.remove()
    .then((results) => {
      res.status(200).send("Database has been cleared");
    });
}
deleteEvents();
// setInterval(() => getTimeTravelers(), hour);
