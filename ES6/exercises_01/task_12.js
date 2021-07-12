/*
12. Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
Output: 8
*/
const input = [2, 8, 3, 2, 22, 14];

maximum = (arr) => {
  return arr.sort((a, b) => b - a).shift();
};

console.log(maximum(input));
