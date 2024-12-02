const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const tofollowRoutes = require('./routes/tofollow')
const logger = require('morgan')
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
// const MongoStore = require('connect-mongo')(session)
const MongoStore = require('connect-mongo')



require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))


// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongoUrl: process.env.DB_STRING }),
    })
  )










  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())



app.use('/', mainRoutes)
app.use('/tofollow', tofollowRoutes)



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`)
})    