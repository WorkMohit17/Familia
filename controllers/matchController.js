const { filterOrphansByDistance } = require("../ml/filterOrphanByDistance");
const { matchOrphansWithParent } = require("../ml/geminiMatch");
const db = require("../firebase/firebaseConnection");

exports.getBestMatches = async (req, res) => {
    try {
        const { parentId } = req.params;

        // Fetch parent data
        const parentDoc = await db.collection("parents").doc(parentId).get();
        if (!parentDoc.exists) return res.status(404).json({ error: "Parent not found" });

        const parentData = parentDoc.data();

        // Step 1: Get first-level filtered orphans (within 50km)
        const filteredOrphans = await filterOrphansByDistance(parentId);

        if (filteredOrphans.length === 0) {
            return res.json({ message: "No suitable orphans found nearby." });
        }

        // Step 2: Call Gemini API for AI-based matchmaking
        const rankedMatches = await matchOrphansWithParent(parentData, filteredOrphans);

        res.json(rankedMatches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
