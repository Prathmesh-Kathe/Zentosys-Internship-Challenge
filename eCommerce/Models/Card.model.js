const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      quantity: { type: Number, default: 1 },
    },
  ],
  total : {
    type : Number ,
    default : 0
  }
});
