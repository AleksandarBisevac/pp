/* Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - 
 */

var num1T1 = 45;
var num2T1 = -92;
var num3T1 = 0.54;
var multT1 = num1T1*num2T1*num3T1;

//  if (multT1 < 0){
//      console.log("Sign is -");
//  }else{
//      console.log("Sign is +");
//  }

(multT1<0) ? console.log("Sign is -") : console.log("Sign is +");
