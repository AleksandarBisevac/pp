/* Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *

*/

/* we use function from task1 to nest it into function for star drawing rows */
var maxNumber = 0;
function maxNum(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return (maxNumber = num1);
  } else if (num2 >= num3 && num2 > num1) {
    return (maxNumber = num2);
  } else {
    return (maxNumber = num3);
  }
}
// console.log(maxNum(1, 5, 7));

function starOutput(num1, num2, num3) {
  maxNum(num1, num2, num3);
  var count1 = "";
  var count2 = "";
  var count3 = "";
  for (i = 1; i <= maxNumber; i++) {
    if (i <= num1) {
      count1 += "*";
    }
    if (i <= num2) {
      count2 += "*";
    }
    count3 += "*";
  }
  console.log(count1);
  console.log(count2);
  console.log(count3);
}

starOutput(3, 33, 99);
