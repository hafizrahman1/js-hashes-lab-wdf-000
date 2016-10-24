'use strict';
function addIngredient(recipe, ingredientName, amounts){
  recipe[ingredientName] = amounts;
  return recipe;
}

function removeIngredient(recipe, ingredientName){
  delete recipe[ingredientName];
  return recipe;
}

function updateIngredient(recipe, ingredientName, amounts){
  recipe[ingredientName] = amounts;
  return recipe;
}

function readRecipe(recipe){
  for (var key in recipe){
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  }
}
