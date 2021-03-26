// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

function thisIsEasy(string) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") count++;
  }
  return count;
}

console.log(thisIsEasy("VegeTA je jaAci od GokuaAA, maaa DAAA!"));
