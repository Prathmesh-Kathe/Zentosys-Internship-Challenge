const express = require("express");
const Product = require("../Models/Product.model.js")
const router = express.Router();

router.get("/vendor/:vendorId", async (req, res) => {
  try {
    const ID = req.params.vendorId;
    const products = await Product.find({ vendorId: ID });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;