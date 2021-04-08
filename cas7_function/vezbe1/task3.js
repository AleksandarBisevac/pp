// Write a program that checks if a given number is a three digit long number.

function is3Digit(num) {
  var abs = num;
  if (num < 0) {
    abs *= -1;
  }
  if (abs / 100 > 1 && abs / 100 < 10) {
    return "Given number " + abs + " is three digit number";
  } else return "Given number is not a three digit number";
}
console.log(is3Digit(-333));
