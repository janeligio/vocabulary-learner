const express = require('express');
const router = express.Router();

// Item model
const Translation = require('../../models/Translation');

// @route GET api/translations
// @desc Get All translations
// @access Public
router.get('/', (req, res) => { // Right now router in this directory so it would be wrong to refer to /api/items
  Translation.find() // Gets all the translatios in the database
    .sort({ date: -1}) // sorts ascending
    .then(translations => res.json(translations)) // parses the data into JSON format
});

// @route POST api/translations
// @desc Get All translations
// @access Public
router.post('/', (req, res) => {
  const newTranslation = new Translation({
    word: req.body.word,
    translation: req.body.translation
  });

  newTranslation.save().then(translation => res.json(translation)); // Save to db

});

// @route DELETE api/translations/:id
// @desc Get All translations
// @access Public
router.delete('/:id', (req, res) => {
  Translation.findById(req.params.id)
    .then(translation => translation.remove().then(
      () => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}));

});

module.exports = router;
