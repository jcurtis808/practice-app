const { Schema } = require('mongoose');

const flashcardSchema = new Schema ({
  deck: String,
  excerpts: [String],
}) 

module.exports = flashcardSchema;