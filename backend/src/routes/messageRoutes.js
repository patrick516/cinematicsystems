const express = require("express");
const {
  getMessages,
  getUnreadCount,
  markAsRead,
  replyToMessage,
  createMessage,
} = require("../controllers/messageController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/", protect, getMessages);
router.get("/unread-count", protect, getUnreadCount);
router.put("/:id/read", protect, markAsRead);
router.post("/:id/reply", protect, replyToMessage);
router.post("/", createMessage);

module.exports = router;
