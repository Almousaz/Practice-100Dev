const express = require("express");
const app = express();

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
