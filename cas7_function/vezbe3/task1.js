/* Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */

function randString(text, string, num) {
  result = "";
  for (var i = 0; i < text.length; i++) {
    if (typeof num !== "number") {
      result = result + string + text;
      break;
    } else if (num > text.length + 1) {
      result = result + text + string;
      break;
    } else {
      if (i === num) {
        result = result + string;
      }
      result += text[i];
    }
  }
  return result;
}

console.log(randString("Neki random tekst !", "BOOM", 62));
