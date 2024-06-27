const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: {
    type: String, // corrected typo
    required: [true, 'Name is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    default: 0,
  },
  image: {
    type: String, // consider changing to Buffer or URL pattern
    required: [true, 'Image is required'],
  },
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;