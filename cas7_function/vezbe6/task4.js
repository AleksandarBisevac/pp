/* Write a function that takes a number and returns array of its digits. */

function numDigitsToArray(number) {
  var arrDigits = [];
  var result = [];
  var digit;
  for (var i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
    digit = i % 10;
    arrDigits[arrDigits.length] = digit;
  }
  for (var j = arrDigits.length - 1; j >= 0; j--) {
    result[result.length] = arrDigits[j];
  }
  return result;
}

console.log(numDigitsToArray(123456789));

// SECOND WAY TO SOLVE THE PROBLEM

function f(number) {
  var result = [];
  var digit;
  var numString = "" + number;
  for (i = 0; i < numString.length; i++) {
    digit = parseInt(numString[i]);
    result[result.length] = digit;
  }
  return result;
}

console.log(f(123456789));
