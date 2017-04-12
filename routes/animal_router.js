const express = require('express')
const router = express.Router()
const animalController = require('../controllers/animal_controller')

router.get('/', animalController.list)
router.post('/', animalController.create)
router.delete('/abandon', animalController.delete)
router.put('/adopt', animalController.update)

module.exports = router
