/* Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function rotateArrByK(array, k) {
  var result = [];
  for (var i = k, j = 0; i < array.length + k; i++) {
    if (i >= array.length) {
      result[result.length] = array[j];
      j++;
    } else {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(rotateArrByK([1, 2, 3, 4, 5, 6], 2));
