"use strict";

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ["food", "electronics"] },
  description: { type: String },
  img: { type: String, required: true },
  price: { type: Number },
  inventory: { type: Number },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
