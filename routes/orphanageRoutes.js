const express = require("express");
const { getAllOrphanages, getOrphanageById } = require("../controllers/orphanageController");

const router = express.Router();

router.get("/", getAllOrphanages);
router.get("/:id", getOrphanageById);

module.exports = router;
