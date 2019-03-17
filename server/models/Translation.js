const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TranslationSchema = new Schema({
  word: {
    type: String,
    required: true
  },
  translation: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Translation = mongoose.model('translation', TranslationSchema);
