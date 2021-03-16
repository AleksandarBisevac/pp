/* Write a program to compute the sum and product of an array of integers. */

var array = [1,11,24,53,72,9,13,92,3,11];
var sum = 0;
var product = 1;

for(var i = 0; i < array.length; i++){
    sum = sum + array[i];
    product = product * array[i];
}

console.log("Sum of an array is "+sum);
console.log("Product of an array is "+product);