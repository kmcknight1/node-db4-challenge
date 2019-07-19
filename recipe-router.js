const router = require("express").Router();

const db = require("./db-config.js");

const Recipes = require("./recipeHelper");

router.get("/", (req, res) => {
  try {
    const recipes = Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/ingredients", (req, res) => {
  try {
    const { name, unitOfMeasurement } = req.body;

    const added = Recipes.addIngredient({ name, unitOfMeasurement });
    res.status(201).json(added);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get("/ingredients", (req, res) => {
  try {
    const ingredients = Recipes.getIngredients();
    res.status(202).json(ingredients);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
