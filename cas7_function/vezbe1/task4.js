/* 4. Write a program that calculates an arithmetic mean of four numbers. */

function arithmeticMean() {
  var result = 0;
  for (i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  result = result / arguments.length;
  return result;
}

console.log(arithmeticMean(5, 4, 77, 12));
