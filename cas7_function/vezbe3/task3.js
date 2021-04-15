/* Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47] */

function filterFalsyArr(array) {
  result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(filterFalsyArr([NaN, 0, 15, false, -22, "", undefined, 47, null]));
