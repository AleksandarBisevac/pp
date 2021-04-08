/* Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

function arrayConcatenate(array1, array2) {
  var arr = [];
  for (var i = 0; i < array1.length; i++) {
    // ab.push(a[i]);
    arr[arr.length] = array1[i];
  }
  for (var i = 0; i < array2.length; i++) {
    // ab.push(b[i]);
    arr[arr.length] = array2[i];
  }
  return arr;
}

console.log(arrayConcatenate([4, 5, 6, 2], [3, 8, 11, 9]));
