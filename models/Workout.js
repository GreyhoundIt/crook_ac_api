const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const WorkoutSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date
    },
    venue: {
        type: String
    }
});

module.exports = Workout = mongoose.model('session', WorkoutSchema);