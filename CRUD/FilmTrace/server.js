const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 7700;
require("dotenv").config();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "movies"; // Updated database name

  MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then((client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (request, response) => {
  db.collection("movies") // Updated collection name
    .find()
    .sort({ likes: -1 }) // Assuming you still want to sort by likes
    .toArray()
    .then((data) => {
      response.render("index.ejs", { info: data });
    })
    .catch((error) => console.error(error));
});

app.post("/addMovie", (request, response) => {
  // Updated route
  db.collection("movies") // Updated collection name
    .insertOne({
      title: request.body.title, // Updated field
      director: request.body.director, // Updated field
      likes: 0, // Assuming you still want to keep likes
    })
    .then((result) => {
      console.log("Movie Added");
      response.redirect("/");
    })
    .catch((error) => console.error(error));
});

app.put("/addOneLike", (request, response) => {
  db.collection("movies") // Updated collection name
    .updateOne(
      {
        title: request.body.titleS, // Updated field
        director: request.body.directorS, // Updated field
        likes: request.body.likesS,
      },
      {
        $set: {
          likes: request.body.likesS + 1,
        },
      },
      {
        sort: { _id: -1 },
        upsert: true,
      }
    )
    .then((result) => {
      console.log("Added One Like");
      response.json("Like Added");
    })
    .catch((error) => console.error(error));
});

app.delete("/deleteMovie", (request, response) => {
  // Updated route
  db.collection("movies") // Updated collection name
    .deleteOne({ title: request.body.titleS }) // Updated field
    .then((result) => {
      console.log("Movie Deleted");
      response.json("Movie Deleted");
    })
    .catch((error) => console.error(error));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
