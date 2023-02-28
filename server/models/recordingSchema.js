const { Schema } = require('mongoose');

const recordingSchema = new Schema ({
  name: String,
  url: {
    type: String,
    unique: true
  },
  notes: [String],
  date: String
})

module.exports = recordingSchema;