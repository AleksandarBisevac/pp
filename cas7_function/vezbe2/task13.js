/* 13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th */

function humanizeNum(number) {
  number += "";
  if (number[number.length - 1] === "1" && number[number.length - 2] !== "1") {
    number += "st";
  } else if (
    number[number.length - 1] === "2" &&
    number[number.length - 2] !== "1"
  ) {
    number += "nd";
  } else if (
    number[number.length - 1] === "3" &&
    number[number.length - 2] !== "1"
  ) {
    number += "rd";
  } else {
    number += "th";
  }
  return number;
}

console.log(humanizeNum(1));
console.log(humanizeNum(11));
console.log(humanizeNum(111));
console.log(humanizeNum(1011));
console.log(humanizeNum(2));
console.log(humanizeNum(12));
console.log(humanizeNum(112));
console.log(humanizeNum(1012));
console.log(humanizeNum(3));
console.log(humanizeNum(13));
console.log(humanizeNum(113));
console.log(humanizeNum(1013));
