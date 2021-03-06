/* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48
 */

var int1 = 12;
var int2 = 5;
var sum = int1 + int2;

(int1 === int2) ? console.log(sum*3) : console.log(sum);
