🧑‍🍳 AI Recipe Generator
A comprehensive MERN stack application that leverages Artificial Intelligence to transform available ingredients into structured cooking instructions and nutritional insights.

📖 Overview
This project provides a professional-grade interface for home chefs to input their kitchen ingredients and receive customized recipes. It features a high-fidelity, single-screen dashboard with balanced content distribution, ensuring all critical information—from cooking steps to nutrient bar charts—is visible at a glance.

✨ Key Features
React-Powered UI: Clean and responsive ingredient input interface.

Intelligent Layout: A 50/50 split-screen design that eliminates scrolling, keeping recipe steps and nutritional charts side-by-side.

Data Visualization: Real-time bar charts powered by Chart.js for an immediate breakdown of calories, protein, carbs, and fats.

MongoDB Integration: Full-stack connectivity using Mongoose to store and manage user "Saved Favorites".

Scalable AI Logic: Current architecture includes a robust AI simulation layer, ready to be hot-swapped with live LLM APIs (like Claude or Gemini).

📦 Technologies Used
Frontend: React.js, Material UI (MUI), Chart.js

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

🔧 Project Status & AI Implementation
Notice: To ensure stable development and avoid third-party API billing constraints during the build phase, this version uses structured hard-coded datasets to simulate AI responses. This approach allows for a "production-ready" UI/UX test without recurring API costs. The backend is pre-configured for future Claude/Gemini API integration.
