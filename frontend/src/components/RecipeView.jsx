import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

export default function RecipeView({ recipe }) {
  return (
    <Card sx={{ height: "100%", borderRadius: 6, display: "flex", flexDirection: "column", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 4, overflow: "hidden" }}>
        <Typography variant="h4" fontWeight="800" color="primary" gutterBottom>{recipe.title}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" fontWeight="700" mb={2}>Cooking Instructions</Typography>
        <Box sx={{ flex: 1, overflowY: "auto", pr: 1, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {recipe.steps.map((step, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box sx={{ bgcolor: 'primary.main', color: 'white', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>
                {i + 1}
              </Box>
              <Typography variant="body1" color="#475569" lineHeight={1.6}>{step}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}