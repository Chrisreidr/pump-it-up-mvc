const mongoose = require('mongoose')

const PumpingSchema = new mongoose.Schema({
  flozFed: {
    type: Number,
    required: true,
  },
  flozStored:{
    type: Number,
    required: true,
  },
  timeFed: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Pumping', PumpingSchema)
