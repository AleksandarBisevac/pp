/*
Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.
*/

function createRecipe(
  name,
  typeOfCuisine,
  num,
  ingredients,
  prepTime,
  instruction
) {
  var recipe = {
    name: name,
    cuisine: typeOfCuisine,
    ingredients: ingredients,
    time: prepTime,
    instruction: instruction,
    complexity: (complex = (function () {
      if (num < 1 && num > 5) {
        return "Ukucajte broj od 1 - 5";
      }
      return num;
    })(num)),
    printIngredients: function () {
      return ingredients;
    },
    changeCuisine: function (input) {
      recipe.cuisine = input;
      return recipe.cuisine;
    },
    deleteIngredient: function (ingredient) {
      var index = recipe.ingredients.indexOf(ingredient);
      if (index !== -1) {
        recipe.ingredients.splice(index, 1);
      }
    },
    checkTime: function () {
      if (prepTime < 15) {
        return "Jelo se sprema lako, manje od 15 minuta!";
      }
      return "Za pripremu je potrebno više od 15 minuta!";
    },
  };
  return recipe;
}

var myRecipe = createRecipe(
  "Recept 1",
  "Srpska",
  7,
  ["pasulj", "paprika", "paradajz", "šargarepa", "biber", "so"],
  16,
  "Kuvati kao i svaki drugi pasulj, ako ne znaš da skuvaš pasulj piješ vinjak 15 godina... Ostalo znaš kako ide!"
);

console.log(myRecipe);
console.log(myRecipe.checkTime());
console.log(myRecipe.printIngredients());
myRecipe.deleteIngredient("pasulj");
console.log(myRecipe.printIngredients());
myRecipe.changeCuisine("Makedonska");
console.log(myRecipe.cuisine);
