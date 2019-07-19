const db = require("./db-config");

module.exports = {
  getRecipes,
  addRecipe,
  addIngredient,
  getRecipeToIngredients,
  relateRecipeToIngredient,
  getIngredients
};

async function getRecipes() {
  const recipes = await db("recipes").select("*");
  return recipes;
}

async function addRecipe(recipe) {
  return await db("recipes")
    .insert(recipe)
    .first();
}

async function addIngredient(ingredient) {
  return await db("ingredients")
    .insert(ingredient)
    .first();
}

async function getIngredients() {
  return await db("ingredients").select("*");
}

async function relateRecipeToIngredient(relationship) {
  return await db("recipe_ingredients")
    .insert(relationship)
    .first();
}

async function getRecipeToIngredients() {
  return await db("recipe_ingredients").select("*");
}
