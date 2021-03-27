/* 9. Write a program that calculates the sum of odd elements of a given array. */
function isOddNum(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function calcOddsInArray(array) {
  var sumOdds = 0;
  for (var i = 0; i < array.length; i++) {
    if (isOddNum(array[i])) {
      sumOdds += array[i];
    }
  }
  return sumOdds;
}

console.log(calcOddsInArray([2, 4, 5, 7, 1, 7, 8, 7]));
