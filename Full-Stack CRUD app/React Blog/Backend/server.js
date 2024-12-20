const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5555;


const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI) //Add your database credentials here!
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

    const postSchema = new mongoose.Schema({
      title: String,
      author: String,
      image: String,
      content: String
  });

 
  




  app.listen(PORT , () => console.log(`Server started on port ${PORT}`));