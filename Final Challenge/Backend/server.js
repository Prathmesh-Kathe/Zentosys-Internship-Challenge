const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require("./utils/db.js")

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({}))

// mongoose.connect('mongodb://localhost:27017/trello-lite');

// Routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/boards', require('./routes/boards'));

app.listen(5000, () => {
  connectDB()
  console.log('Server running on port 5000');
})

