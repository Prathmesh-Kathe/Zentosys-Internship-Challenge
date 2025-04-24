const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Final");
    console.log("connected to DB")
  } catch (error) {
    console.log("Error in DB" + error)
  }
}

module.exports = connectDB;