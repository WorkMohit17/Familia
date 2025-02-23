const db = require("../firebase/firebaseConnection");

const Orphan = {
  getAll: async () => {
    const snapshot = await db.collection("orphans").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  getById: async (id) => {
    const doc = await db.collection("orphans").doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }
};

module.exports = Orphan;
