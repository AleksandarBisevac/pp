/* Write a program that checks if a given number is odd. */

function isOddNum(num) {
  if (num % 2 !== 0) {
    return "Number is odd";
  }

  return "Number is even";
}

console.log(isOddNum(5));
