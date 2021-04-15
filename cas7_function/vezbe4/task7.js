/* Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] 
----------------
if not same size, more interesting!

array1 = [2, 5, 3, 6, -5];
array2 = [1, 7, -4];*/

function interwineArrays(array1, array2) {
  var arr = [];
  var bigArray = [];
  var smallArray = [];

  if (array1.length >= array2.length) {
    bigArray = array1;
    smallArray = array2;
  } else {
    bigArray = array2;
    smallArray = array1;
  }
  for (var i = 0; i < bigArray.length; i++) {
    if (i < smallArray.length) {
      arr[arr.length] = bigArray[i];
      arr[arr.length] = smallArray[i];
    } else {
      arr[arr.length] = bigArray[i];
    }
  }
  return arr;
}

console.log(interwineArrays([2, 5, 3, 6, -5], [1, 7, -4]));
