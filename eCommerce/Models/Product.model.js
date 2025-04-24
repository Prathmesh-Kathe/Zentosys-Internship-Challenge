const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name : {
    type : String,
  },
  price : {
    type : Number,
  },
  stock : {
    type : Number
  },
  category : {
    type : String
  },
  vendorId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
})

const Product = new mongoose.model("Product" , productSchema);

module.exports = Product