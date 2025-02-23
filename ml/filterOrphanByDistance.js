const db = require("../firebase/firebaseConnection");
const haversine = require("haversine-distance");

const filterOrphansByDistance = async (parentId) => {
    try {
        const parentDoc = await db.collection("parents").doc(parentId).get();
        if (!parentDoc.exists) throw new Error("Parent not found");

        const parentData = parentDoc.data();
        if (!parentData.location || !parentData.location.latitude || !parentData.location.longitude) {
            throw new Error("Parent location data is incomplete");
        }

        const parentLocation = {
            lat: parentData.location.latitude,
            lon: parentData.location.longitude,
        };

        const orphansSnapshot = await db.collection("orphans").get();
        const orphans = orphansSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        const nearbyOrphans = orphans.filter(orphan => {
            if (!orphan.location || !orphan.location.latitude || !orphan.location.longitude) return false;

            const orphanLocation = {
                lat: orphan.location.latitude,
                lon: orphan.location.longitude,
            };

            const distance = haversine(parentLocation, orphanLocation) / 1000; // Convert to km
            return distance <= 50;
        });

        return nearbyOrphans;
    } catch (error) {
        console.error("Error filtering orphans by distance:", error);
        return { error: error.message };
    }
};

module.exports = { filterOrphansByDistance };
