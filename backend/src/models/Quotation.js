const mongoose = require("mongoose");

const quotationItemSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  total: {
    type: Number,
    required: true,
  },
});

const quotationSchema = new mongoose.Schema({
  quotationNo: {
    type: String,
    unique: true, // ✅ keep uniqueness
    // ❌ removed required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  validUntil: {
    type: Date,
    required: true,
  },
  customerId: {
    type: String,
    default: "",
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    default: "",
  },
  projectDescription: {
    type: String,
    required: true,
  },
  items: [quotationItemSchema],
  subtotal: {
    type: Number,
    required: true,
  },
  vat: {
    type: Number,
    default: 0,
  },
  otherCharges: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected", "Expired"],
    default: "Pending",
  },
  notes: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Generate quotation number
quotationSchema.pre("save", async function (next) {
  if (!this.quotationNo) {
    const year = new Date().getFullYear();
    const count = await mongoose.model("Quotation").countDocuments();
    this.quotationNo = `Q-${year}-${(count + 1).toString().padStart(4, "0")}`;
  }
  next();
});

module.exports = mongoose.model("Quotation", quotationSchema);
