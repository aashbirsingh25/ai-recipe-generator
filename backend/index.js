const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const mockSavedRecipes = [
  {
    _id: "1",
    title: "Mushroom & Spinach Risotto",
    nutrition: { calories: 450, protein: 12, carbs: 60, fat: 15 },
    steps: ["Saute arborio rice with onions.", "Slowly add broth.", "Fold in mushrooms and spinach."]
  },
  {
    _id: "2",
    title: "Garlic Butter Salmon",
    nutrition: { calories: 380, protein: 35, carbs: 5, fat: 22 },
    steps: ["Sear salmon skin-side down.", "Baste with garlic butter.", "Rest and serve."]
  }
];

app.post("/api/recipe/generate", (req, res) => {
  res.json({
    title: "Mediterranean Garden Omelette",
    steps: [
      "Whisk 3 eggs with salt and pepper.",
      "Sauté diced onions until translucent.",
      "Add vegetables and cook for 3 minutes.",
      "Pour eggs over vegetables and set on low heat.",
      "Fold and garnish with feta."
    ],
    nutrition: { calories: 310, protein: 19, carbs: 8, fat: 22 }
  });
});

app.get("/api/recipe/favorites", (req, res) => res.json(mockSavedRecipes));

app.listen(5000, () => console.log("✅ Full-screen server running on Port 5000"));