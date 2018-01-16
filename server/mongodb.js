const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/timetraveler');

const eventSchema = mongoose.Schema({
  email: String,
  date: Date,
  hash: String
})

const TimeTraveler = mongoose.model('TrimeTraveler', eventSchema);

module.exports = TimeTraveler;
