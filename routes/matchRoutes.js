const express = require("express");
const { getBestMatches } = require("../controllers/matchController");

const router = express.Router();

router.get("/match/:parentId", getBestMatches);

module.exports = router;
