/* Write a program that outputs the sum of squares of the first 20 numbers. */

result = 0;
for(var i = 0; i < 20; i++){
    result = result + i*i;
}
console.log("The sum of squares of the first 20 numbers is ",result);