const express = require("express");
const {
  createQuotation,
  getQuotations,
  getQuotationById,
} = require("../controllers/quotationController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/", protect, createQuotation);
router.get("/", protect, getQuotations);
router.get("/:id", protect, getQuotationById);

module.exports = router;
