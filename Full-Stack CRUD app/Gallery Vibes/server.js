const express = require("express");
const app = express();
const connectDB = require("./config/database");

const mainRoutes = require("./routes/main");





//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });



//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");


//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());











//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
// app.use("/post", postRoutes);


//Server Running
app.listen(process.env.PORT || 5555 , () => {
  console.log("Server is running, you better catch it!");
});
