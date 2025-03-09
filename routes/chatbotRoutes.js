const express = require("express");
const chatbotController = require("../controllers/chatbotController");

const router = express.Router();
router.use("/", chatbotController);

module.exports = router;
