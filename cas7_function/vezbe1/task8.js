/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/

function elementRepInArray(array, number) {
  count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count++;
    }
  }
  return count;
}

console.log(elementRepInArray([2, 4, 5, 7, 1, 7, 8, 7], 7));
