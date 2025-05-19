import { getRecipes } from "./api.js";

// DOM Elements

const form = document.getElementById("form");
const query = document.getElementById("search-input");
const recipeList = document.getElementById("recipe-list");

// Functions

export function displayRecipes(recipes) {
  recipeList.innerHTML = "";

  if (recipes.length === 0) {
    recipeList.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipes.forEach((recipe) => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");

    recipeElement.innerHTML = `
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}" />
      <p><strong>Preparation Time:</strong> ${
        recipe.preparationTime
      } minutes</p>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;

    recipeList.appendChild(recipeElement);
  });
}

// Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const recipe = query.value;

  if (recipe) {
    getRecipes(recipe);
    searchInput.value = "";
  } else {
    console.error("Please search for a recipe.");
  }
});

query.addEventListener("input", () => {
  if (query.value.trim() === "") {
    getRecipes();
  }
});

// Load all recipes on page load
window.addEventListener("DOMContentLoaded", () => {
  getRecipes();
});
