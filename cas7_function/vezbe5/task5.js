/*(skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 */

function sortDesArr(array) {
  result = [];
  var maxElement = array[0];
  var position = 0;
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== undefined) {
        if (array[j] > maxElement) {
          maxElement = array[j];
          position = j;
        }
      }
    }
    result[i] = maxElement;
    array[position] = undefined;
    maxElement = -Infinity;
  }
  return result;
}

console.log(sortDesArr([13, 11, 15, 5, 6, 1, 8, 12]));
