/*
Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]

Output: [7, 8]
*/

const input = [1.6, 11.34, 9.23, 7, 3.11, 8];

const getIntegers = (arr) => {
  return arr.filter((element) => parseFloat(element) === parseInt(element));
};

console.log(getIntegers(input));
