import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

// Use the onSubmit prop from App.jsx
export default function IngredientForm({ onSubmit, loading }) {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = () => {
    if (!ingredients.trim()) return alert("Please enter ingredients");
    onSubmit(ingredients); // This calls generateRecipe in App.jsx
  };

  return (
    <Box textAlign="center">
      <TextField
        label="Enter ingredients (comma separated)"
        fullWidth
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        sx={{ mb: 2 }}
        disabled={loading}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={loading}
        fullWidth
      >
        Generate Recipe
      </Button>
    </Box>
  );
}