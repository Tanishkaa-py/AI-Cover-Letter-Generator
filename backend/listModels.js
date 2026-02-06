require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const models = await genAI.listModels();

  console.log("Available Models:");
  models.forEach(m => console.log(m.name));
}

listModels();
