/* Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number */

function reverseNum(number) {
  var result = 0,
    counter = 0;
  for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
    counter = i % 10;
    result = result * 10 + counter;
  }
  return result;
}

console.log(reverseNum(547793));

/* YEAAH MDFK! */
