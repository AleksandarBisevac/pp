/*
11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output: 48
*/
const input = [2, 8, 3, 2];

multiply = (arr) => {
  return arr.reduce((a, b) => a * b);
};

console.log(multiply(input));
