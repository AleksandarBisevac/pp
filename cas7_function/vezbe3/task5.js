/* Write a function to get the last element of an array. Passing a parameter "n" will return the
last "n" elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */

function lastElemOfArray(array, n) {
  result = [];
  if (n === undefined) {
    result[result.length] = array[array.length - 1];
    return result;
  } else {
    for (var i = array.length - 1, j = n - 1; i >= array.length - n; i--, j--) {
      //j represents the highest position of an element in result array, and "n" is its length
      result[j] = array[i];
    }
    return result;
  }
}
console.log(lastElemOfArray([7, 9, 0, -2], 3));
