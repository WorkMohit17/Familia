const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI("AIzaSyB9WVAhaGFiAYYNGeckZ2pOB8G4GPDH-dg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let chatHistory = [];

const getGeminiResponse = async (message) => {
    try {
        chatHistory.push({ role: "user", parts: [{ text: message }] });
        const result = await model.generateContent({ contents: chatHistory });
        const botResponse = result.response.candidates[0].content.parts[0].text;
        chatHistory.push({ role: "model", parts: [{ text: botResponse }] });
        return botResponse;
    } catch (error) {
        console.error("Error calling Gemini API:", error.response?.data || error.message);
        return "I'm facing issues connecting to the AI service.";
    }
};

module.exports = { getGeminiResponse };