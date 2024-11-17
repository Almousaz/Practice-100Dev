//  Declare variables

const express = require("express");
const app = express();
const PORT = 7800;
const mongoose = require("mongoose");
require("dotenv").config();

// add model variable

//  set middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// basic fundamental express method app.listen and app.get

app.get("/", (req, res) => {
  res.send("Hi, welcome to our app!");
});

// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
//   console.log("Connected to DB !");
// });


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB !");
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
