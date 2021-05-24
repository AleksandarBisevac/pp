/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

function deleteDuplicate(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.sort(function (a, b) {
    return a - b;
  });
}

var someArr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var arr = deleteDuplicate(someArr);

console.log(arr);

/* 
var newArray = array.filter(function(item, pos) {
  return array.indexOf(item) === pos;
})
*/
