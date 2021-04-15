/* Write a function to find the median element of array. */

function medianElement(array) {
  var result;
  if (array.length % 2 === 0) {
    result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
    return result;
  } else {
    result = array[array.length / 2 - 0.5];
    return result;
  }
}
console.log(medianElement([1, 2, 3, 4, 5, 6]));
