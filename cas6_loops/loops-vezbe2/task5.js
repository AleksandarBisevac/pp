/* Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var a = [3, 11, -5, -3, 2];
var count = 0;
for (var i = 0; i < a.length; i++) {
    if(a[i]>0){
        count = count + a[i]
    }
}

console.log(count);