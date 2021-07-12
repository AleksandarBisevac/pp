/*
Write a function that returns indexes of the elements greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: 1, 2, 5
*/

const indexesGreater = (num, ...arg) => {
  return arg
    .filter((element) => element > num)
    .map((element) => arg.indexOf(element))
    .toString();
};
console.log(indexesGreater(10, 1.6, 11.34, 29.23, 7, 3.11, 18));
