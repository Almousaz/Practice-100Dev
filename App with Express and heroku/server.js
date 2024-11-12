const express = require("express");
const app = express();
const PORT = 6000;

const rappers = {
  "21 savage": {
    'age': 29,
    'birthName': "Sheya Bin Abraham - Joseph",
    'birthLocation': "England",
  },
  "chance the rapper": {
    'age': 25,
    'birthName': "Chancelor Bennet",
    'birthLocation': "Chicago",
  },
  'unknown': {
    'age': 0,
    'birthName': "unknown",
    'birthLocation': "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  // console.log(req.params.name)
  const rapperName = req.params.name.toLowerCase();
  // res.json(rappers)
  //   console.log(`Request received for: ${rapperName}`); // Log the requested rapper name

  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Go get it!`);
});
