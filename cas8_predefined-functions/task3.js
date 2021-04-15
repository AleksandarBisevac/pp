/* 3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: [15, -22, 47] */

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function returnTruthy() {
  var result = [];
  for (var i = 0; i < array.length; i++)
    if (array[i]) {
      result[result.length] = array[i];
    }
  return result;
}

console.log(returnTruthy(array));
