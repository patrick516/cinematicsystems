const express = require("express");
const {
  getStats,
  getRecentMessages,
  getRecentProducts,
} = require("../controllers/dashboardController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/stats", protect, getStats);
router.get("/recent-messages", protect, getRecentMessages);
router.get("/recent-products", protect, getRecentProducts);

module.exports = router;
