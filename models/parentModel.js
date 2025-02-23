const db = require("../firebase/firebaseConnection");

const Parent = {
  create: async (data) => {
    const ref = await db.collection("parents").add(data);
    return { id: ref.id, ...data };
  },
  getAll: async () => {
    const snapshot = await db.collection("parents").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  getById: async (id) => {
    const doc = await db.collection("parents").doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },
  update: async (id, data) => {
    await db.collection("parents").doc(id).update(data);
    return { id, ...data };
  },
  delete: async (id) => {
    await db.collection("parents").doc(id).delete();
    return { message: "Parent deleted successfully" };
  }
};

module.exports = Parent;
