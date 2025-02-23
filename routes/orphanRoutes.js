const express = require("express");
const { createOrphan, getAllOrphans, getOrphanById } = require("../controllers/orphanController");

const router = express.Router();

router.get("/", getAllOrphans);
router.post("/", createOrphan);
router.get("/:id", getOrphanById);

module.exports = router;
