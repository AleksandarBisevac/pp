/* Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. */

function average() {
  var sum = 0;
  var avrg;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  avrg = sum / arguments.length;
  return avrg;
}

console.log(average(2, 5, 7, 10));
