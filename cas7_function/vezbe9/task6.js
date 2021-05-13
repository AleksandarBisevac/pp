/*
6. Write a function that replaces the elements of the given array between two positions with
their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/
var arr = [3, 5, 1, 8, 90, -4, 23, 1, 67];
var funnyArr = function (param1, param2, array) {
  var result = array.map(function (value, index, array) {
    if (
      (index <= param1 && index >= param2) ||
      (index >= param1 && index <= param2)
    ) {
      return value * 2;
    } else {
      return value;
    }
  });
  return result;
};
console.log(funnyArr(2, 6, arr));
