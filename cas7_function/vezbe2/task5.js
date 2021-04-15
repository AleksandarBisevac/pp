/* 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */

function firstString(character, string) {
  character = character + "";
  string = string + "";
  var position = -1;
  for (i = 0; i <= string.length; i++) {
    if (string[i] === character) {
      position = i + 1;
      break;
    }
  }
  return position;
}

console.log(firstString("B", "booleanB šmr"));
