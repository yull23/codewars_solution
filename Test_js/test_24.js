function cakes(recipe, available) {
  let ingredientsRecipe = Object.keys(recipe);
  let result = ingredientsRecipe.map((element) =>
    Math.floor(available[element] / recipe[element])
  );
  console.log(result);
  if (result.includes(NaN)) {
    return 0;
  }
  return Math.min(...result);
}

let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
let available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available));
