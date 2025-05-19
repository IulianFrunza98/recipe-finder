import { displayRecipes } from "./main.js";

export async function getRecipes(query = "") {
  const baseUrl = query
    ? `https://dummyjson.com/recipes/search?q=${query}`
    : "https://dummyjson.com/recipes";

  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    const recipeDetails = data.recipes.map((recipe) => ({
      name: recipe.name,
      image: recipe.image,
      instructions: recipe.instructions,
      ingredients: recipe.ingredients,
      preparationTime: recipe.prepTimeMinutes,
    }));

    displayRecipes(recipeDetails);
  } catch (err) {
    console.error(err.message);
  }
}
