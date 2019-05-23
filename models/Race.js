const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const RaceSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date
  },
  distance: {
    type: String
  },
  location:{
    type: String
  },
  notes: {
    type: String
  }
});

module.exports = Race = mongoose.model('race', RaceSchema);