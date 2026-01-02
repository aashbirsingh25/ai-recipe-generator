const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
