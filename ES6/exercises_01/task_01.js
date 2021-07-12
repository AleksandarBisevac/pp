/*
1. Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: ["hallo", "there", "ES", 6]
Output: ["Hallo", "There", "ES"]
*/

const capitalizeFirstLetter = (...args) => {
  return args
    .filter((element) => typeof element === "string")
    .map((element) => element[0].toUpperCase() + element.slice(1));
};

console.log(capitalizeFirstLetter("hallo", "there", "ES", 6));
