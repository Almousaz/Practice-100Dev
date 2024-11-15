
const express = require('express')
const app = express()
const PORT = 3200

app.use(express.static('public'))
app.use(express.urlencoded({ extended : true }))
app.set('view engine' , 'ejs')
app.use(logger)







const userRouter = require('./routes/users')
app.use('/users' , userRouter)

function logger(req , res , next){
    console.log(req.originalUrl)
    next()
}


app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`);
    
})