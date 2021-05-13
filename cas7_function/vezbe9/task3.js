/*
3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning
*/

function insertChar(text, position, char) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    if (i === position - 1) {
      result += char;
      result += text[i];
    } else {
      result += text[i];
    }
  }
  return result;
}

var output = insertChar("'Goo morning Vietnam!'", 5, "d");
console.log(output);
