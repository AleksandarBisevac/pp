/*
Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']

*/

let array = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];

const filterStringInArr = (arr, text) => {
  let output = [];
  arr
    .map((element) => element.toUpperCase())
    .filter((element, index) => {
      if (element.includes(text.toUpperCase())) {
        output.push(arr[index]);
      }
    });

  return output;
};

console.log(filterStringInArr(array, "js"));
