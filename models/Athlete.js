const mongoose = require('mongoose')

const AthleteSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Athlete', AthleteSchema)
