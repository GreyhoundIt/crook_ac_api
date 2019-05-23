const express = require('express');
const router = express.Router();


//Workouts Model

const Workout = require('../../models/Workout');

// @route GET api/Workouts
// @desc Get all Workouts
// @access Public

router.get('/', (req, res) => {
    Workout.find()
        .sort({date: 1})
        .then(items => res.json(items))
});

// @route Post api/Workouts
// @desc Create a Workout
// @access Public

router.post('/', (req, res) => {
    const newWorkout = new Workout({
        description: req.body.description,
        date: req.body.date,
        venue: req.body.venue
    });

    newWorkout.save()
        .then(workout => res.json(workout));
});

// Update a workout with workout
router.put('/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        description: req.body.description,
        date: req.body.date,
        venue: req.body.venue
    }, {new: true})
        .then(workout => res.json(workout))
        .catch(err => res.status(404).json({success: false}))
});

// @route Delete api/workouts/:id
// @desc Delete a Workout
// @access Public

router.delete('/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => workout.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;