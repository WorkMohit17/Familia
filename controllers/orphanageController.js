const db = require("../firebase/firebaseConnection");

exports.getAllOrphanages = async (req, res) => {
  try {
    const snapshot = await db.collection("orphanages").get();
    const orphanages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(orphanages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrphanageById = async (req, res) => {
  try {
    const doc = await db.collection("orphanages").doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ error: "Orphanage not found" });
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
