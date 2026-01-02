import { useState, useEffect } from "react";
import axios from "axios";
import { 
  Box, 
  Typography, 
  Grid, 
  Button, 
  Paper, 
  CircularProgress 
} from "@mui/material";

import IngredientForm from "./components/IngredientForm";
import RecipeView from "./components/RecipeView";
import NutritionChart from "./components/NutritionChart";

function App() {
  const [recipe, setRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("home"); 

  useEffect(() => {
    axios.get("http://localhost:5000/api/recipe/favorites")
      .then(res => setFavorites(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleGenerate = async (ingredients) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/recipe/generate", { ingredients });
      setRecipe(res.data);
      setView("result");
    } catch (err) {
      alert("Generation failed");
    }
    setLoading(false);
  };

  return (
    <Box sx={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", bgcolor: "#F8FAFC", overflow: "hidden" }}>
      
      {/* HEADER */}
      <Box sx={{ py: 2, textAlign: "center", flexShrink: 0 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A" }}>
          🧑‍🍳 AI Recipe Generator
        </Typography>
        <Typography variant="body2" sx={{ color: "#64748B" }}>
          Professional Recipe Intelligence & Nutrition Tracking
        </Typography>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: 3 }}>
        
        {view === "home" ? (
          <Grid container spacing={4} sx={{ maxWidth: "1000px" }}>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 6, border: "1px solid #E2E8F0", height: "450px" }}>
                <Typography variant="h5" fontWeight="700" mb={3}>Find New Recipe</Typography>
                <IngredientForm onSubmit={handleGenerate} loading={loading} />
                {loading && <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />}
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 6, border: "1px solid #E2E8F0", height: "450px", overflowY: "auto" }}>
                <Typography variant="h5" fontWeight="700" mb={3}>❤️ Saved Favorites</Typography>
                {favorites.map((fav) => (
                  <Paper key={fav._id} onClick={() => { setRecipe(fav); setView("result"); }} 
                    sx={{ p: 2.5, mb: 1.5, cursor: "pointer", border: "1px solid #E2E8F0", "&:hover": { bgcolor: "#F1F5F9" } }}>
                    <Typography fontWeight="700">{fav.title}</Typography>
                  </Paper>
                ))}
              </Paper>
            </Grid>
          </Grid>
        ) : (
          /* RESULT VIEW: Shifted slightly to the right using ml: 12 */
          <Box sx={{ width: "100%", maxWidth: "1200px", height: "80vh", display: "flex", flexDirection: "column", ml: 12 }}>
            <Button onClick={() => setView("home")} sx={{ alignSelf: "flex-start", mb: 2, fontWeight: "bold", color: "#64748B" }}>
              ← BACK TO KITCHEN
            </Button>
            
            <Grid container spacing={3} sx={{ flex: 1, minHeight: 0 }}>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <RecipeView recipe={recipe} />
              </Grid>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <NutritionChart nutrition={recipe.nutrition} />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;