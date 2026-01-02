import { Card, CardContent, Typography, Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function NutritionChart({ nutrition }) {
  const data = {
    labels: ["Calories", "Protein (g)", "Carbs (g)", "Fat (g)"],
    datasets: [{
      data: [nutrition.calories, nutrition.protein, nutrition.carbs, nutrition.fat],
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
      borderRadius: 8,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: "#f1f5f9" } },
      x: { grid: { display: false } }
    }
  };

  return (
    <Card sx={{ height: "100%", borderRadius: 6, display: "flex", flexDirection: "column", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 4 }}>
        <Typography variant="h5" fontWeight="700" mb={1}>Nutrition Breakdown</Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>Estimated values per serving</Typography>
        <Box sx={{ flex: 1, width: "100%", minHeight: 0 }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
}