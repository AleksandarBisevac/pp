/*
Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28
*/
var decimalFromOctal = (function (octalNum) {
  function calc() {
    var decimalNum = parseInt(octalNum, 10);
    return decimalNum;
  }
  return calc;
})(034)();

console.log(decimalFromOctal);
