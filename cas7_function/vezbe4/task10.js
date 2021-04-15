/* Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function elInArrByPosition(e, p, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (p === i) {
      result[result.length] = e;
    }
    result[result.length] = array[i];
    if (p > array.length) {
      result[result.length] = e;
    }
  }
  return result;
}

console.log(elInArrByPosition(78, 3, [2, -2, 33, 12, 5, 8]));
