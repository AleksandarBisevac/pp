/* (never skip leg day)
Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ] */

function sortArr(array) {
  result = [];
  var minElement = array[0];
  var position = 0;
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== undefined) {
        if (array[j] < minElement) {
          minElement = array[j];
          position = j;
        }
      }
    }
    result[i] = minElement * 2;
    array[position] = undefined;
    minElement = Infinity;
  }
  return result;
}

console.log(sortArr([13, 11, 15, 5, 6, 1, 8, 12]));
