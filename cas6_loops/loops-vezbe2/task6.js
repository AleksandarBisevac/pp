/* Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var a = [2, 4, -2, 7, -2, 4, 2];
var b = [];

for (i = a.length - 1; i >= 0; i--) {
    b[b.length] = a[i];
}

var aString = a.toString();
var bString = b.toString();

console.log(aString);
console.log(bString);
(aString === bString) ? console.log("The array is symmetric") : console.log("The array is not symmetric");

/* Dariov kod */
/*
var result = true;

for(var start=0, end = a.lenght-1; start < end; start++, end--){
    if (a[start]!== a[end]){
        result = false;
    }
}
result ? console.log("Array is symetric") : console.log("Array is NOT symetric")
*/