/*
5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]

*/
var arr = [3, 5, 1, 8, 90, -4, 23, 1, 67];

var delSecArray = arr.filter(function (element, index, array) {
  return index % 2 === 0;
});

console.log(delSecArray);
