const axios = require("axios");
require("dotenv").config;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Replace with your actual API key

const getGeminiResponse = async (message) => {
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: message }] }],
            }
        );

        return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "I'm facing issues connecting to the AI service.";
    }
};

module.exports = { getGeminiResponse };
