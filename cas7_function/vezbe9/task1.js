/*
1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false
*/
function containsDigit(string, digit) {
  for (var i = 0; i < string.length; i++) {
    var parseString = parseFloat(string[i]);
    if (parseString === digit) {
      return true;
    }
  }
  return false;
}
var output = containsDigit("1b895abd", 5);
var output2 = containsDigit("1bser9re", 5);
console.log(output);
console.log(output2);
