/*
10. Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Output: yes
Input: [3, -12, 4, 11]
Output: no
*/

const inputArr = [3, 11, 9, 5, 6];

isPosInt = (arr) => {
  if (
    arr.every(
      (element) => element > 0 && parseFloat(element) === parseInt(element)
    )
  ) {
    return "yes";
  } else {
    return "no";
  }
};

console.log(isPosInt(inputArr));
