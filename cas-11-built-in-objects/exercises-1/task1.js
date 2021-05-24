/*
1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
*/

function duplicateArray(array) {
  var output = [];
  array.forEach(function (element) {
    output.push(element, element);
  });
  return output;
}

var arr = [2, 4, 7, 11, -2, 1];

var dupArr = duplicateArray(arr);

console.log(dupArr);
