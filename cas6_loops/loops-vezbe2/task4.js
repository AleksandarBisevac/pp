/* Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var a = [4, 2, 2, -1, 6];
var minElement = Infinity; // staviti vrednost infinity
var nextToMin = Infinity; // staviti vrednost infinity

for (var i = 0; i < a.length; i++) {
  if (a[i] < minElement) {
    nextToMin = minElement;
    minElement = a[i];
  } else if (nextToMin > a[i]) {
    nextToMin = a[i];
  }
}

console.log(nextToMin);
