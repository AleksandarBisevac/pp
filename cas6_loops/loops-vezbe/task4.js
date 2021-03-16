/* Write a program which prints the elements of the following array as a single string. */

var x = ["1","A","B","c","r",true,NaN,undefined];
var result = "";

for(var i = 0; i < x.length; i++){
result+=String(x[i]);
}

console.log(result);