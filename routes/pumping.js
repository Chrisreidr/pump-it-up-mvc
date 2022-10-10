const express = require('express')
const router = express.Router()
const pumpingController = require('../controllers/pumping') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, pumpingController.getPumpingLog)

router.get('/totalPumpingLog', pumpingController.totalPumpingLog)

router.post('/createLog', pumpingController.createLog)

router.delete('/deleteLog/:id', pumpingController.deleteLog)

module.exports = router