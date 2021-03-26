/* 1. Write a program that calculates the maximum of two given numbers. */

function maxNum(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxNum(22, 33));
