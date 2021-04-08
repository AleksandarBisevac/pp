/* Write a function to get the first n characters and add “...” at the end of newly created string. */

function firstNChar(string, number) {
  result = "";
  for (var i = 0; i < number; i++) {
    result += string[i];
  }
  result += "...";
  return result;
}

console.log(firstNChar("Ovo je neki string", 8));
