const { Schema } = require('mongoose');

const calendarSchema = new Schema({
  date: String,
  time: String,
  event: String,
})

module.exports = calendarSchema;