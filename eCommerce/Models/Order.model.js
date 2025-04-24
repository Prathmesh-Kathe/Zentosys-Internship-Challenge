const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : "User"
  },
  productId : {
    type : mongoose.Schema.Types.ObjectId , 
    ref : "Product"
  },
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending"
  }
},  { timestamps: true })

const Order = new mongoose.model("Order" , OrderSchema)