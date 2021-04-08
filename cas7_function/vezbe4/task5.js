/* Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

function sumPosEl(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count += array[i];
    }
  }
  return count;
}
console.log(sumPosEl([3, 11, -5, -3, 2]));
