const express = require('express')
const app = express()

require('dotenv').config({path: './config/.env'})












app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`)
})    