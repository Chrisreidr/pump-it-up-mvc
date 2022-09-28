const express = require('express')
const router = express.Router()
const pumpingController = require('../controllers/pumping') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, pumpingController.getPumpingLog)

router.post('/createLog', pumpingController.createLog)

// router.put('/totalFloz/:id', pumpingController.totalFloz)

router.delete('/deleteLog/:id', pumpingController.deleteLog)

module.exports = router