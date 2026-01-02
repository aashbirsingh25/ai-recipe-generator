const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  ingredients: [String],
  steps: String,
  nutrition: Object,
  favorite: { type: Boolean, default: false }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
