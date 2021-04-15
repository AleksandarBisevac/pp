/* Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */

function arrStrToArrNum(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    array[i] = parseFloat(array[i]);
    if (isFinite(array[i])) {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(arrStrToArrNum(["1", "21", undefined, "42", "1e+3", Infinity]));
