const express = require("express");
const {
  createQuotation,
  previewQuotation,
  downloadQuotation,
  getQuotations,
  getQuotationById,
} = require("../controllers/quotationController");
const { protect } = require("../middleware/auth");

const router = express.Router();

// Preview/download before sending (no DB save)
router.post("/preview", protect, previewQuotation);

// Create + send via email
router.post("/", protect, createQuotation);

// Get all quotations
router.get("/", protect, getQuotations);

// Get single quotation
router.get("/:id", protect, getQuotationById);

// Download PDF for existing quotation
router.get("/:id/download", protect, downloadQuotation);

module.exports = router;
