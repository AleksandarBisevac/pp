/* Write a program that compares two numbers and displays the larger */

// var x = 5;
// var y = 5;
// var max;
// var min;

// if (x > y){
//     max = x;
//     min = y;
// } else if(y > x){
//     max = y;
//     min = x;
// } else{
//     console.log("Brojevi su jednaki!");
// }

// console.log("Number "+max+" je veći broj od "+min);


/*Write a program to check if the number is divisible by 3 and 5. If it is, print that number */
//sample numbers: 15, 12 (check one at the time)
// output: 15

var z = 15;
var rez = "";
// if (z % 3 === 0 && z % 5 === 0){
//     console.log("Broj "+z+" je deljiv i sa 5 i sa 3!");
// }else{
//     console.log("Broj "+z+" nije deljiv i sa 3 i sa 5!");
// }
if(z % 3 === 0 && z % 5 === 0){
    rez = z + " is divisble by 3 and 5";
}else if(z % 3 === 0){
    rez = z + " is divisible by 3, but not by 5";
}else if( z % 5 ===0){
    rez = z + " is divisible by 5, but not with 3";
}else {
    rez = z + " iss not divisible by 3 and 5";
}
console.log(rez);

/* Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - 
 */

 var num1T1 = 45;
 var num2T1 = -92;
 var num3T1 = 0.54;
var multT1 = num1T1*num2T1*num3T1;

//  if (multT1<0){
//      console.log("Sign is -");
//  }else{
//      console.log("Sign is +");
//  }

 (multT1<0) ? console.log("Sign is -") : console.log("Sign is +");

 /* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 
 */
var num1T2 = 15;
var num2T2 = -22;
var num3T2 = -69;
var num4T2 = 0;
var num5T2 = 66;

if (num1T2>num2T2 && num1T2>num3T2 && num1T2>num4T2 && num1T2>num5T2)
{
    console.log(num1T2);
}
else if (num2T2>num1T2 && num2T2>num3T2 && num2T2>num4T2 && num2T2>num5T2)
{
    console.log(num2T2);
}
else if (num3T2>num1T2 && num3T2>num2T2 && num3T2>num4T2 && num3T2>num5T2)
{
    console.log(num3T2);
}
else if (num4T2>num1T2 && num4T2>num2T2 && num4T2>num3T2 && num4T2>num5T2)
{
    console.log(num4T2);
}
else
{
    console.log(num5T2);
}

 /* 
Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
 */

 var num1T3 = 4;
 var num2T3 = -1;
 var num3T3 = 0;

 if (num1T3 > num2T3 && num2T3 > num3T3){
     console.log("Redosled je: "+num1T3,num2T3,num3T3);
    }else if (num1T3 > num2T3 && num2T3 < num3T3)

        if (num1T3 > num3T3){
        console.log("Redosled je: "+num1T3,num3T3,num2T3);
        }else{
        console.log("Redosled je: "+num3T3,num1T3,num2T3)
    
    }else if (num2T3>num1T3 && num1T3>num3T3){
        console.log("Redosled je: "+num2T3,num1T3,num3T3);
    
    }else if (num2T3 > num1T3 && num2T3 < num3T3)
        if (num1T3 > num3T3){
            console.log("Redosled je: "+num2T3,num1T3,num3T3);
        }else{
            console.log("Redosled je: "+num2T3,num3T3,num2T3);
    
    }else if (num3T3 > num1T3 && num1T3 < num2T3)
        if (num3T3 > num2T3){
            console.log("Redosled je: "+num3T3+num2T3+num1T3);
        }else{
            console.log("Redosled je: "+num3T3+num1T3+num2T3);
        }

 /* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X  
 */

var broj = 7;
if (typeof(broj) ==="number")
    if (broj%2 === 0){
        console.log(broj/2);
    }else{
        console.log("X");
    }

/* Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.
 */

 var broj1 = 66;
 var broj2 = 33;

//  if (broj1>broj2){
//      console.log(broj1);
//  }else{
//      console.log(broj2);
//  }

 (broj1>broj2) ? console.log(broj1) : console.log(broj2);

/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F
*/

var tempC = 60;
var tempF = (9*tempC/5) +32;
console.log(tempC+" Celzijusa je "+tempF+" Farenhajta.");

/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38
 */

 var nekiBroj = 31;
 var razlika13 = nekiBroj - 13;

 if (razlika13 < 0){
     razlika13 = -1 * razlika13;
 }
 
//  if (nekiBroj > 13){
//      console.log(razlika13 * 2);
//  }else{
//      console.log(razlika13);
//  }
(nekiBroj > 13) ? console.log(razlika13 * 2) : console.log(razlika13);


 /* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48
 */

var int1 = 12;
var int2 = 5;
var sumT8 = int1 + int2;

(int1 === int2) ? console.log(sumT8*3) : console.log(sumT8);

/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true

 */

var number1 = 5;
var number2 = 54;
var sumT9 = number1 + number2;
(number1===50 || number2===50 || sumT9===50) ? consol.log("true") : console.log("-");

 /*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
*/

var a = 34;

if(a > 20 && a < 100) {
    console.log("20 -- 100");
}else if(a > 100 && a < 400){
    console.log("100 -- 400");
}else{
    console.log(" - ");
}