# Project Prompts – AI Cover Letter Generator

This file documents all major AI prompts that were used while developing the AI Cover Letter Generator project. Each prompt served a specific purpose during different phases of the application.

---

## 1. Initial Concept Prompt

Used while planning the project structure and functionality:

"Design a beginner-friendly AI Cover Letter Generator application that accepts user input and generates a professional cover letter. Provide step-by-step guidance including frontend, backend, and API integration."

Purpose:
- To plan the project workflow  
- To understand implementation steps  
- To define beginner, intermediate, and advanced levels  

---

## 2. UI and Form Design Prompt

Used to generate the frontend structure:

"Create a professional HTML and CSS interface for a cover letter generator with the following inputs:
- Candidate Name  
- Job Role  
- Company Name  
- Key Skills  
Include a clean layout, submit button, and an output box with copy-to-clipboard functionality."

Purpose:
- To generate a structured user interface  
- To improve visual appearance  
- To create a user-friendly experience  

---

## 3. Level 1 – Template Simulation Prompt

Used before real AI integration:

"Return a formatted cover letter string using the following details:
Name: [User Name]
Role: [Job Role]
Company: [Company Name]

Output the letter in formal style starting with 'Dear Hiring Manager'."

Purpose:
- To simulate AI behavior without API  
- To test UI and logic flow  

---

## 4. Level 2 – Basic AI Generation Prompt

Used to generate letters from simple user inputs:

"Write a professional cover letter using the following information:

Name: [Name]
Job Role: [Role]
Company: [Company]
Skills: [Skills]

Ensure the letter is formal, properly structured, and suitable for a job application."

Purpose:
- Core AI prompt for basic functionality  
- Convert user input into meaningful output  

---

## 5. Enhanced Formatting Prompt

Used to improve AI output structure:

"Generate a well-formatted cover letter with clear paragraphs, professional tone, and proper greetings using the following details:

Name: [Name]
Role: [Role]
Company: [Company]
Skills: [Skills]

Avoid bullet points and keep the letter concise."

Purpose:
- To improve readability  
- To enforce professional structure  

---

## 6. Level 3 – Resume-Based Personalization Prompt

Used when a resume PDF is uploaded:

"Create a highly personalized cover letter using the details below:

Name: [Name]
Applying Role: [Role]
Company: [Company]

Resume Text:
[Extracted Resume Content]

Use the resume content to highlight relevant skills, projects, and experience. The letter must be formal, professional, and well-structured in paragraphs."

Purpose:
- To generate customized letters  
- To use real resume data  
- To improve relevance and personalization  

---

## 7. Error Handling and User Feedback Prompts

Used for better UX messages:

- "Generating your cover letter, please wait..."
- "Error generating cover letter. Please try again."
- "Please upload a valid PDF resume file."

Purpose:
- Improve user interaction  
- Provide meaningful system messages  

---

## 8. API Integration Guidance Prompt

Used while setting up Gemini API:

"Provide step-by-step instructions to connect Google Gemini API to a Node.js backend using secure .env configuration and proper error handling."

Purpose:
- To implement AI safely  
- To avoid exposing API keys  

---

## 9. GitHub Documentation Prompt

Used to prepare repository documentation:

"Generate a professional README.md file for an AI Cover Letter Generator project including features, setup steps, technologies used, and deployment instructions."

Purpose:
- To document the project  
- To improve presentation for evaluation  

---

## 10. Deployment Assistance Prompt

Used to deploy the project:

"Provide step-by-step instructions to upload this project to GitHub and deploy the frontend on Vercel and backend on Render."

Purpose:
- To host the project online  
- To make it shareable and usable  

---

### Summary

These prompts formed the backbone of the AI Cover Letter Generator project and guided both development and AI integration. Proper prompt design helped achieve structured, accurate, and professional outputs.

