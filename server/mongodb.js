const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/timetraveler');

const timeTravelerSchema = mongoose.Schema({
  email: String,
  date: Number,
  hash: String
})

const TimeTraveler = mongoose.model('TrimeTraveler', timeTravelerSchema);

module.exports = TimeTraveler;
