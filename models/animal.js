const mongoose = require('mongoose')

let animalSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [2, 'Animal title must be at least 2 characters long']
  },
  description: String,
  completed: Boolean
})

let Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
