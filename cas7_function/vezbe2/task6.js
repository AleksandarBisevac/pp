/* Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

function firstString(character, string) {
  character = character + "";
  string = string + "";
  var position = -1;
  for (var i = string.length; i >= 0; i--) {
    if (string[i] === character) {
      position = i + 1;
      break;
    }
  }
  return position;
}

console.log(firstString("B", "BooBilly"));
