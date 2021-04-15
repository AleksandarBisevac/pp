/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

function arrMin(array) {
  var minElement = array[0];
  var count = 0;
  var message;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minElement) {
      minElement = array[i];
      count = i;
    }
    message = minElement + ", " + count;
  }

  return message;
}
console.log(arrMin([4, 2, 2, -1, 6]));
