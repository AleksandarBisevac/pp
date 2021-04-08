/* Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9 */

function greatestCommonDivisor(int1, int2) {
  var divisor = 0;
  var minNum = int1;
  if (int2 <= int1) {
    minNum = int2;
  }

  for (var i = 1; i <= minNum; i++) {
    if (int1 % i === 0 && int2 % i === 0) {
      divisor = i;
    }
  }
  return divisor;
}

console.log(greatestCommonDivisor(192, 42));
