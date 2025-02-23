const db = require("./firebase/firebaseConnection");

// Example: Fetch all orphans
async function getOrphans() {
  const snapshot = await db.collection("orphans").get();
  snapshot.forEach((doc) => console.log(doc.id, "=>", doc.data()));
}

getOrphans();
