/* Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *

*/
function starOutput() {
  var out = "";
  for (i = 0; i < arguments.length; i++) {
    for (j = 0; j < arguments[i]; j++) {
      out += "*";
    }
    out += "\n";
  }
  return out;
}

console.log(starOutput(3, 33, 99));

/* we use function from task1 to nest it into function for star drawing rows */

/* PRVOBITNO REŠENJE ZA TRI BROJA
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
  var out = "";
  for (i = 1; i <= maxNumber; i++) {
    if (i <= num1) {
      count1 += "*";
    }
    if (i <= num2) {
      count2 += "*";
    } else {
      count3 += "*";
    }
    out = count1 + "\n" + count2 + "\n" + count3;
  }
  return out;
}

console.log(starOutput(3, 33, 99));
*/
