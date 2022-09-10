const mongoose = require('mongoose')

const PumpingSchema = new mongoose.Schema({
  flozFed: {
    type: Number,
    required: true,
  },
  flozStored:{
    type: Date,
    required: false
  },
  timeFed: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pumping', PumpingSchema)
