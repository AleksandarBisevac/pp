/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true

 */

var number1 = 5;
var number2 = 54;
var sum = number1 + number2;
(number1===50 || number2===50 || sum===50) ? consol.log("true") : console.log("-");