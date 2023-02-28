const { Schema } = require('mongoose');

const practiceLogSchema = new Schema ({
  date: String,
  time: String,
  notes: String,
  recording: [String]
})

module.exports = practiceLogSchema;