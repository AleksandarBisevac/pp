// Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//     ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var num1 = 5;
var num2 = 0;
var sign = "/";

switch (sign) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        if (num2 !=0)
        console.log(num1 / num2);
        else {
            console.log("Watch out for divison by zero!");
        }
        break;
    case "*":
        console.log(num1 * num2);
        break;
}