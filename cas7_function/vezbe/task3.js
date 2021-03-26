// Write a program that checks if a given number is a three digit long number.

function is3Digit(num) {
  if (num / 100 > 1 && num / 100 < 10) {
    return num;
  } else return "Given number is not a three digit number";
}
console.log(is3Digit(3333));
