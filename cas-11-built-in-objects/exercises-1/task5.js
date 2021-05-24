/*
 5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.
*/
/************************************************************************************************ */
// a //
var someArray = [2, 3, 8, -2, 11, 4];
function findGiven(array, value) {
  var output = array.filter(function (element) {
    return element < value;
  });
  return output;
}

var outputA = findGiven(someArray, 6);
console.log(outputA);
/************************************************************************************************ */
// b //
var bArray = ["JavaScript", "Programming", "fun", "product"];

function findSubstringElement(array, string) {
  var output = [];
  var modArray = array.slice();
  modArray = modArray.map(function (value) {
    return value.toUpperCase();
  });
  for (var i = 0; i < array.length; i++) {
    if (modArray[i].slice(0, string.length) === string.toUpperCase()) {
      output.push(array[i]);
    }
  }
  return output;
}

var outputB = findSubstringElement(bArray, "pRo");
console.log(outputB);
/************************************************************************************************ */
// c //

function filterC(array, value, f) {
  return f(array, value);
}
var arrayC = ["kaskader", "kASkadno", "programer", "defektologija"];
var outputC = filterC(arrayC, "kas", findSubstringElement);
var outputCtwo = filterC(someArray, 4, findGiven);
console.log(outputC);
console.log(outputCtwo);
