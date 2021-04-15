/* Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function delElemInArray(e, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== e) {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(delElemInArray(2, [4, 6, 2, 8, 2, 2]));
