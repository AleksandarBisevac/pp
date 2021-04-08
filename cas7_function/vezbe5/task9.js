/* Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */

function twoNumCombo() {
  //number of comb should be 7*6 = 42
  var count = 0;
  var result = "";
  var message;
  for (var i = 1; i <= 7; i++) {
    for (j = 1; j <= 7; j++) {
      if (i !== j) {
        result += "(" + i + "," + j + ")\n";
        count++;
      }
    }
  }
  message = result + count;
  return message;
}

console.log(twoNumCombo());
