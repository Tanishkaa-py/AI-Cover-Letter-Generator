require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// LEVEL 2 – NORMAL GENERATE ROUTE
app.post("/generate", async (req, res) => {
  try {
    const { name, role, company, skills } = req.body;

    const prompt = `
    Write a professional cover letter:

    Name: ${name}
    Job Role: ${role}
    Company: ${company}
    Skills: ${skills}

    Make it formal, well structured and professional.
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.json({ letter: response.text() });

  } catch (error) {
    console.log("Generate Route Error:", error);
    res.status(500).json({ error: error.message });
  }
});

async function extractTextFromPDF(buffer) {
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  
    let fullText = "";
  
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
  
      const pageText = textContent.items.map(item => item.str).join(" ");
      fullText += pageText + "\n";
    }
  
    return fullText;
  }
  

// LEVEL 3 – RESUME UPLOAD ROUTE
app.post("/generate-with-resume", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { name, role, company } = req.body;
    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text.substring(0, 5000);
    
    
    

    const prompt = `
    Create a highly personalized professional cover letter using this information:

    Name: ${name}
    Role: ${role}
    Company: ${company}

    Resume Content:
    ${resumeText}

    Format the letter properly with paragraphs and professional tone.
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.json({ letter: response.text() });

  } catch (error) {
    console.log("Resume Route Error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
