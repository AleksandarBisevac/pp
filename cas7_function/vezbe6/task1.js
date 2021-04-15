/* Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

function countVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u" ||
      string[i] === "A" ||
      string[i] === "E" ||
      string[i] === "I" ||
      string[i] === "O" ||
      string[i] === "U"
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("Ovo je samo neki ubogi string!"));
//prebaciti if u switch case
