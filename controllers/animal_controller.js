var Animal = require('../models/animal')

var animalsController = {
  list: (req, res) => {
    Animal.find({}, (err, animals) => {
      if (err) throw err
      res.render('animal/index', { animals: animals })
    })
  },

  new: (req, res) => {
    res.render('animal/create')
  },

  listOne: (req, res) => {
    Animal.findById(req.params.id, (err, animalItem) => {
      if (err) throw err
      res.render('animal/single-animal', { animalItem: animalItem })
    })
  },

  create: (req, res) => {
    var newAnimal = new Animal({
      title: req.body.title,
      description: req.body.description,
      completed: false
    })
    newAnimal.save(function (err, savedEntry) {
      if (err) throw err
      res.redirect('/animal')
    })
  },

  edit: (req, res) => {
    Animal.findById(req.params.id, (err, animalItem) => {
      if (err) throw err
      res.render('animal/edit', { animalItem: animalItem })
    })
  },

  update: (req, res) => {
    Animal.findOneAndUpdate({
      _id: req.params.id
    }, {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    }, (err, animalItem) => {
      if (err) throw err
      res.redirect('/animal/' + animalItem.id)
    })
  },

  delete: (req, res) => {
    Animal.findByIdAndRemove(req.params.id, (err, animalItem) => {
      if (err) throw err
      res.redirect('/animal')
    })
  }

}

module.exports = animalsController
