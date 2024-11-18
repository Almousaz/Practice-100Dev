//  Declare variables

const express = require("express");
const app = express();
const PORT = 7900;
const mongoose = require("mongoose");
require("dotenv").config();

// add model variable
const TodoTask = require("./models/todotask");
// const TodoTask = require("./models/TodoTask");

//  set middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


//  Connecting express to mongo DB

mongoose
.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to DB !");
})
.catch((err) => {
  console.error("Database connection error:", err);
});

// basic fundamental express method app.listen and app.get
// GET METHOD

app.get("/", async (request, response) => {
  try {
    const tasks = await TodoTask.find({});
    response.render("index.ejs", {
      todoTasks: tasks
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// POST
app.post("/", async (req, res) => {
  const todoTask = new TodoTask({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    await todoTask.save();
    console.log(todoTask);
    res.redirect("/");
  } catch (err) {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
