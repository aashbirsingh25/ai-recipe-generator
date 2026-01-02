const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// 1. Middleware
app.use(cors()); // Allows React (on port 3000/5173) to talk to this server
app.use(express.json()); // Allows server to read JSON sent in req.body

// 2. The Route Handler
// This matches your React call: http://localhost:5000/api/recipe/generate
app.post("/api/recipe/generate", (req, res) => {
  const { ingredients } = req.body;

  console.log("Ingredients received:", ingredients);

  // HARD-CODED RESPONSE
  const recipe = {
    title: "Simple Veg Omelette",
    ingredientsUsed: ingredients,
    steps: [
      "Chop all vegetables",
      "Heat pan with oil",
      "Add vegetables and sauté",
      "Pour beaten eggs",
      "Cook until golden brown"
    ],
    nutrition: {
      calories: 320,
      protein: 18,
      carbs: 22,
      fat: 20
    }
  };

  // Send the data back to React
  res.json(recipe);
});

// 3. Start the Server
app.listen(PORT, () => {
  console.log(`
🚀 Server is running!
🔗 URL: http://localhost:${PORT}/api/recipe/generate
  `);
});