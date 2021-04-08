/* Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function arrayMinMaxSwitch(array) {
  var max = array[0];
  var maxIndex = 0;
  var min = array[0];
  var minIndex = 0;
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array[minIndex] = max;
  array[maxIndex] = min;

  return array;
}

console.log(arrayMinMaxSwitch([3, 500, 12, 149, 53, 414, 1, 19]));
