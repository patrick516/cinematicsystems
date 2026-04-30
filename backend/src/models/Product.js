const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String,
    default: "📺",
  },
  badge: {
    type: String,
    default: "",
  },
  features: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
    required: true,
    // Removed enum - now accepts any string like "Decoders", "Accessories", etc.
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  image: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
