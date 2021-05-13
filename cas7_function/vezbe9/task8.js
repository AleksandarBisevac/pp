/*
8. Write a function that checks if every element of the first array is contained in the second
array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/
var arr1 = [3, 4, 1, 3];
var arr2 = [8, 9, 3, 1, 11, 4, 3];

function noRepElement(array) {
  var temp;
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        temp = true;
      } else {
        temp = false;
      }
    }
    if (temp) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(noRepElement([3, 4, 1, 3, 7, 3, 7, 21, 5, 4]));

// function checkArr(array1, array2) {
//   console.log(newArray1);
// }
// checkArr(arr1, arr2);
