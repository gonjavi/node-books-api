const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  progress: { type: Number, required: false },
  chapter: { type: String, required: false }
});

module.exports = mongoose.model('Book', bookSchema);