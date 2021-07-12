/*
Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0]
*/

let array = [6, 11, 9, 0, 3];

const getEven = (arr) => {
  return arr.filter((element) => element % 2 === 0);
};

console.log(getEven(array));
