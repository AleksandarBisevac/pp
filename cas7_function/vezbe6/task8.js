/* Write a function to find the maximum and minimum elements. Function returns an array. */

function maxAndMinElement(array) {
  maxNum = -Infinity;
  minNum = Infinity;
  for (i = 0; i < array.length; i++) {
    if (!isNaN(array[i] && array[i] !== null)) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      } else if (array[i] < minNum) {
        minNum = array[i];
      }
    }
  }
  return [minNum, maxNum];
}
console.log(maxAndMinElement([-5, true, NaN, 0, 21, 44.7, 6, 0, 500, 22]));
