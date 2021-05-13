/*
4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”

*/

function delChar(text, position) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    if (i !== position) {
      result += text[i];
    }
  }
  return result;
}

var output = delChar("'Good morning Vietnam!'", 4);
console.log(output);
