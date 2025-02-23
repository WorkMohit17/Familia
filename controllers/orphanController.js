const Orphan = require("../models/orphanModel");

exports.createOrphan = async (req, res) => {
  try {
    const parent = await Orphan.create(req.body);
    res.status(201).json(parent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrphans = async (req, res) => {
  try {
    const orphans = await Orphan.getAll();
    res.json(orphans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrphanById = async (req, res) => {
  try {
    const orphan = await Orphan.getById(req.params.id);
    if (!orphan) return res.status(404).json({ error: "Orphan not found" });
    res.json(orphan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};