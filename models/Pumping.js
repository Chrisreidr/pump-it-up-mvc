const mongoose = require('mongoose')

const PumpingSchema = new mongoose.Schema({
  flozFed: {
    type: Number,
    required: true,
  },
  timeFed: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pumping', PumpingSchema)
