const express = require('express');
const router = express.Router();


//Races Model

const Race = require('../../models/Race');

// @route GET api/Races
// @desc Get all Races
// @access Public

router.get('/', (req, res) => {
  Race.find()
    .sort({date: 1})
    .then(items => res.json(items))
});

// @route Post api/Races
// @desc Create a Race
// @access Public

router.post('/', (req, res) => {
  const newRace = new Race({
    name: req.body.name,
    date: req.body.date,
    distance: req.body.distance,
    location: req.body.location,
    notes: req.body.notes
  });

    newRace.save()
      .then(race => res.json(race));
});

// @route Delete api/races/:id
// @desc Delete a Race
// @access Public

router.delete('/:id', (req, res) => {
  Race.findById(req.params.id)
  .then(race => race.remove().then(() => res.json({
    success: true
  })))
  .catch(err => res.status(404).json({success: false}))
});

module.exports = router;