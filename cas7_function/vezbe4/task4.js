/* Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

function secSmall(array) {
  var minElement = Infinity;
  var nextToMin = Infinity;

  for (var i = 0; i < array.length; i++) {
    if (array[i] < minElement) {
      nextToMin = minElement;
      minElement = array[i];
    } else if (nextToMin > array[i]) {
      nextToMin = array[i];
    }
  }
  return nextToMin;
}

console.log(secSmall([4, 2, 2, -1, 6]));
