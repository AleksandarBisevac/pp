/* Write a program that prints a multiplication table for numbers up to 12. */

function multipl12() {
  var message = "";
  var line = "__________________\n";
  var sum;
  for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) {
      sum = i * j;
      message += i + " * " + j + " = " + sum + "\n";
    }
    message += line;
  }
  return message;
}

console.log(multipl12());
//resiti kao matricu
