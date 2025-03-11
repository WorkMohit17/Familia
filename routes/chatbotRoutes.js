const express = require("express");

const {getBestMatches} = require("../controllers/chatbotController");

const router = express.Router();
router.post("/chat", getBestMatches);

module.exports = router;
