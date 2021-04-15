/* 11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

function thisIsEasyAlso(string, number) {
  sum = "";
  for (var i = 0; i < number; i++) {
    sum += string;
  }
  return sum;
}

console.log(thisIsEasyAlso("funkmasterisdisaster", 5));
