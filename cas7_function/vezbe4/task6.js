/* Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

function simmArr(array) {
  var result = true;
  for (var start = 0, end = array.lenght - 1; start < end; start++, end--) {
    if (array[start] !== a[end]) {
      result = false;
    }
  }
  return result;
}

console.log(simmArr([2, 4, -2, 7, -2, 4, 2]));
