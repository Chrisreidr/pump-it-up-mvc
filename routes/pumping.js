const express = require('express')
const router = express.Router()
const pumpingController = require('../controllers/pumping') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, pumpingController.getPumpingLog)

router.post('/createLog', pumpingController.createLog)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router