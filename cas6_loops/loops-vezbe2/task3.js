/* Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var a = [4, 2, 2, -1, 6];
var minElement = a[0];
var count = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] < minElement) {
        minElement = a[i];
        count = i;
    }
}

console.log(minElement + ", " + count);
