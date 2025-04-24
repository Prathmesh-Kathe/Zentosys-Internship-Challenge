const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name : {
    type : String,
  },
  email : {
    type : String
  },
  password : {
    type : String
  },
  role : {
    type : String,
    enum : ["customer", "admin", "vendor"],
    default : "customer"
  },
  card : {
    type : mongoose.Schema.Types.ObjectId,
    role : "card",
  }
})

const User = mongoose.model("User" , userSchema);

module.exports = User