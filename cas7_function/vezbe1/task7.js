/* 7. Write a program that calculates a number of digits of a given number. */

function giveMeDigits(num) {
  var count = 0;
  for (var i = num; i >= 1; i /= 10) {
    count++;
  }
  return count;
}
var broj = 545;
console.log(giveMeDigits(broj));

/* RADI SVE DOK JE 15-ocifreni broj, posle funkcija izbacuje 0 */
