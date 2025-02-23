const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI("AIzaSyB9WVAhaGFiAYYNGeckZ2pOB8G4GPDH-dg");

const matchOrphansWithParent = async (parentData, filteredOrphans) => {
    try {
        if (!parentData || filteredOrphans.length === 0) {
            throw new Error("Invalid input: Parent or orphan data is missing.");
        }

        const prompt = `
            You are an AI expert in adoption matchmaking. Your job is to rank orphans 
            based on how well they match with the given parent. Consider the following factors:

            - Age preference
            - Gender preference
            - Health conditions
            - Education expectations
            - Hobbies & interests
            - Parents child preference
            - Parents children which they already have

            Return a JSON array of top matches in **descending** order of compatibility.
            
            Parent Data:
            ${JSON.stringify(parentData, null, 2)}

            Orphans Data:
            ${JSON.stringify(filteredOrphans, null, 2)}

            Response Format (Do NOT include \`\`\`json markdown):
            [
                {
                    "id": "orphan_id",
                    "name": "Orphan Name",
                    "match_score": 95,
                    "reason": "Strong match on age, gender, and hobbies"
                }
            ]
        `;

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        const cleanedResponse = responseText.replace(/```json|```/g, "").trim();

        const rankedMatches = JSON.parse(cleanedResponse);

        return rankedMatches;
    } catch (error) {
        console.error("Error in Gemini matchmaking:", error);
        return { error: error.message };
    }
};

module.exports = { matchOrphansWithParent };
