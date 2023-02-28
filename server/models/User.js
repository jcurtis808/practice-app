const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
const flashcardSchema = require('./flashcardSchema.js')

const UserSchema = new Schema({
  name: { 
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Must be a valid email address']
   },
   password: {
    type: String,
    required: true,
    minLength: 6
   },
   flashcards: [flashcardSchema],
   recordings: [recordingSchema],
   practiceLog: [practiceLogSchema],
   calendar: [calendarSchema]
})


// Password hash middleware.
 
UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})


// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}


module.exports = model('User', UserSchema);