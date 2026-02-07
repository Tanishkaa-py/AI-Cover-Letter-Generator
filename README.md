# AI Cover Letter Generator

An AI-powered web application that generates professional cover letters using Google Gemini API. The application supports both simple input-based generation and advanced resume-based personalization.

## Features

- Generate cover letters using AI
- Input fields: Name, Role, Company, Skills
- Upload PDF resume for personalized letters
- Copy to clipboard functionality
- Loading animation
- Clean and responsive UI
- Secure API key handling with .env
- Backend built with Node.js and Express

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- Google Gemini API
- Multer (file upload)
- PDF Parser
- dotenv

## How to Run Locally

### 1. Clone the Repository

git clone <your-repo-url>

### 2. Install Dependencies

cd backend  
npm install

### 3. Create .env file

Inside backend folder create:

GEMINI_API_KEY=your_api_key_here  
PORT=5000

### 4. Start Server

node server.js

### 5. Open Frontend

Open frontend/index.html in browser

## Deployment

- Frontend deployed on Vercel  
- Backend deployed on Render  

## Future Improvements

- Support for DOCX resumes  
- Multiple AI models  
- Download letter as PDF  
- User authentication  

## Author

Tanishka Jain
