/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes */

function someArrF(array, e) {
  resTrue = "yes";
  resFalse = "no";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === e) {
      return resTrue;
    }
  }
  return resFalse;
}

console.log(someArrF([5, -4.2, 3, 7], 3));
