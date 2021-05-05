/* 
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
*/

var array = [4, 5, 11, 9];
var transArray = (function (array) {
  var result = [];
  var firstElement = array[0];
  var lastElement = array[array.length - 1];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      result[i] = lastElement;
    } else if (i === array[array.length - 1]) {
      result[i] = firstElement;
    } else {
      result[result.length] = array[i];
    }
  }
  return result;
})(array);

console.log(transArray);
