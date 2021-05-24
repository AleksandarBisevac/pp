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

// function createRecipe(
//   name,
//   typeOfCuisine,
//   num,
//   ingredients,
//   prepTime,
//   instruction
// ) {
//   var recipe = {
//     name: name,
//     cuisine: typeOfCuisine,
//     ingredients: ingredients,
//     time: prepTime,
//     instruction: instruction,
//     complexity: (complex = (function () {
//       if (num < 1 && num > 5) {
//         return "Ukucajte broj od 1 - 5";
//       }
//       return num;
//     })(num)),
//     printIngredients: function () {
//       return ingredients;
//     },
//     changeCuisine: function (input) {
//       recipe.cuisine = input;
//       return recipe.cuisine;
//     },
//     deleteIngredient: function (ingredient) {
//       var index = recipe.ingredients.indexOf(ingredient);
//       if (index !== -1) {
//         recipe.ingredients.splice(index, 1);
//       }
//     },
//     checkTime: function () {
//       if (prepTime < 15) {
//         return "Jelo se sprema lako, manje od 15 minuta!";
//       }
//       return "Za pripremu je potrebno više od 15 minuta!";
//     },
//   };
//   return recipe;
// }

// var myRecipe = createRecipe(
//   "Recept 1",
//   "Srpska",
//   7,
//   ["pasulj", "paprika", "paradajz", "šargarepa", "biber", "so"],
//   16,
//   "Kuvati kao i svaki drugi pasulj, ako ne znaš da skuvaš pasulj piješ vinjak 15 godina... Ostalo znaš kako ide!"
// );

// console.log(myRecipe);
// console.log(myRecipe.checkTime());
// console.log(myRecipe.printIngredients());
// myRecipe.deleteIngredient("pasulj");
// console.log(myRecipe.printIngredients());
// myRecipe.changeCuisine("Makedonska");
// console.log(myRecipe.cuisine);

function Recipe(name, typeOfCuisine, num, ingredients, prepTime, instruction) {
  this.name = name;
  this.cuisine = typeOfCuisine;
  this.ingredients = ingredients;
  this.time = prepTime;
  this.instruction = instruction;
  this.complexity = complex = (function () {
    if (num < 1) {
      return 1;
    } else if (num > 5) {
      return 5;
    }
    return num;
  })(num);
  this.printIngredients = function () {
    return ingredients;
  };
  this.changeCuisine = function (input) {
    this.cuisine = input;
    return this.cuisine;
  };
  this.deleteIngredient = function (ingredient) {
    var index = this.ingredients.indexOf(ingredient);
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
  };
  this.checkTime = function () {
    if (prepTime < 15) {
      return "Jelo se sprema lako, manje od 15 minuta!";
    }
    return "Za pripremu je potrebno više od 15 minuta!";
  };
}

var myRecipe = new Recipe(
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
myRecipe.deleteIngredient("paradajz");
console.log(myRecipe.printIngredients());
myRecipe.changeCuisine("Makedonska");
console.log(myRecipe.cuisine);
