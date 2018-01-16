const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/timetraveler');

const timeTravelerSchema = mongoose.Schema({
  email: String,
  date: Date,
  hash: String
})

const TimeTraveler = mongoose.model('TrimeTraveler', timeTravelerSchema);

module.exports = TimeTraveler;
