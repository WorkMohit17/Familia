const { getGeminiResponse } = require("../ml/geminiChat");

exports.getBestMatches = async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const response = await getGeminiResponse(message);
        res.json({ reply: response });
    } catch (error) {
        console.error("Error in chatbot:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
