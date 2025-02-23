const Parent = require("../models/parentModel");

exports.createParent = async (req, res) => {
  try {
    const parent = await Parent.create(req.body);
    res.status(201).json(parent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllParents = async (req, res) => {
  try {
    const parents = await Parent.getAll();
    res.json(parents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getParentById = async (req, res) => {
  try {
    const parent = await Parent.getById(req.params.id);
    if (!parent) return res.status(404).json({ error: "Parent not found" });
    res.json(parent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateParent = async (req, res) => {
  try {
    const parent = await Parent.update(req.params.id, req.body);
    res.json(parent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteParent = async (req, res) => {
  try {
    const response = await Parent.delete(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
