const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')



require('dotenv').config({path: './config/.env'})


connectDB()




app.use('/', mainRoutes)




app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`)
})    