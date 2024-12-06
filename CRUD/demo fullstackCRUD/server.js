require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Item = require('./models/Item')

const app = express();

const port = process.env.PORT || 4747;

//  connect to MongoDB

// mongoose.connect(process.env.DB_STRING , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.arred.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware

// enable CORS
app.use(cors());

// Serve static files
app.use(express.static("public"));

//  Parse request

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  Set EJS as templating engine
app.set("view engine", "ejs");

// Routes
app.get('/', (req, res) => {
  res.render('index')
});


app.get('/item', async (req, res) => {
  const items = await Item.find({});
  res.render('item', { items });
});

// Create
app.post('/item', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    await newItem.save();
    res.redirect('/item');
  } catch (err) {
    //you can set up custom error handling on the client side using this information
    res.redirect('/item?error=true');
  }
});

// Update
app.post('/item/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    await Item.findByIdAndUpdate(id, { name, description });
    res.redirect('/item');
  } catch (err) {
    //you can set up custom error handling on the client side using this information
    res.redirect(`/item?error=true`);
  }
});

// Delete
app.delete('/item/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  //Send success back to the client-side function
  res.status(200).json({ message: 'Item deleted successfully' });
});





// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
