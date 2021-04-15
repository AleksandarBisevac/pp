/* 
4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 3
*/

var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

function sumIntInArr() {
  result = 0;
  for (i = 0; i < array.length; i++) {
    if (isFinite(parseInt(array[i])) && array[i] % 1 === 0) {
      result++;
    }
  }
  return result;
}

console.log(sumIntInArr(array));
