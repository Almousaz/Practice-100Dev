require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const catRoutes = require('./routes/catRoutes');

const PORT = process.env.PORT || 5555

connectDB()




//  middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.use('/', catRoutes);


//  connect to mongo db before start the  server
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })

