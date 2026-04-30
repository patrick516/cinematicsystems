const Product = require("../models/Product");
const Service = require("../models/Service");
const Message = require("../models/Message");

const getStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalServices = await Service.countDocuments();
    const totalMessages = await Message.countDocuments();

    res.json({
      totalProducts,
      totalServices,
      totalMessages,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRecentMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(5);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRecentProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).limit(4);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStats, getRecentMessages, getRecentProducts };
