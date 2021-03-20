/* Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var ab = [];

for (var i = 0; i < a.length; i++) {
    ab.push(a[i]);
}
for (var i = 0; i < b.length; i++) {
    ab.push(b[i]);
}

console.log(ab);