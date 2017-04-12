const express = require('express')
const app = express()
const path = require('path')
const animalRouter = require('./routes/animal_router')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.set('view engine', 'ejs')

// new routes

// // GET '/'
// const pageRouter = require('./routes/page_router')
// app.use('/', pageRouter)
// // GET '/about'
// const pageRouter = require('./routes/page_router')
// app.use('/about', pageRouter)
// // GET '/faq'
// const pageRouter = require('./routes/page_router')
// app.use('/faq', pageRouter)

app.use('/animal', animalRouter)

// app.get('/', (req, res) => {
//   res.send('My new homepage')
// })

app.listen(process.env.PORT || 3000, function(){
  console.log('app is running')
})
