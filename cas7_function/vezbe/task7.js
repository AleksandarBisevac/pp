/* 7. Write a program that calculates a number of digits of a given number. */

function giveMeDigits(num) {
  count = 0;
  for (i = 1; num % 10 > 1; i++) {
    count = i;
    num /= 10;
  }
  return count;
}
console.log(giveMeDigits(999999999999999));

/* RADI SVE DOK JE 15-ocifreni broj, posle funkcija izbacuje 0 */
