const express = require("express");
const { getAllOrphans, getOrphanById } = require("../controllers/orphanController");

const router = express.Router();

router.get("/", getAllOrphans);
router.get("/:id", getOrphanById);

module.exports = router;
