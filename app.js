const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const keys = require('./config/keys')
const app = express()

const AuthRouter = require('./routes/auth')
const FormsRouter = require('./routes/forms')
const ControlRouter = require('./routes/controls')

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())
app.use(require('morgan')('dev'))

mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))

app.use('/api/auth', AuthRouter)
app.use('/api/forms', FormsRouter)
app.use('/api/controls', ControlRouter)

module.exports = app