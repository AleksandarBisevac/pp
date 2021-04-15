/* Write a function to find the maximum element in array of numbers. Filter out all non-number
elements. */

function maxElement(array) {
  maxNum = -Infinity;
  for (i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    }
  }
  return maxNum;
}

console.log(maxElement([-5, true, NaN, null, 0, 21, 44.7, 6, 0, 500, 22]));
