/* Write a function to find a word within a string.
"The quick brown fox", "fox" -> "'fox' was found 1 times"
"aa bb cc dd aa", "aa" -> "'aa' was found 2 times" */

function findStringInText(text, string) {
  var counter = 0;
  text += "";
  var result = "";
  for (var i = 0; i < text.length; i++) {
    result = "";
    for (j = 0; j <= string.length; j++) {
      if (j < string.length) {
        result += text[i + j];
      }
      if (
        result === string &&
        j === string.length &&
        (text[j + i] === "!" ||
          text[j + i] === "." ||
          text[j + i] === "'" ||
          text[j + i] === "?" ||
          text[j + i] === " " ||
          text[j + i] === '"' ||
          text[j + i] === "," ||
          text[j + i] === text[text.length - 1 + text[text.length]])
      ) {
        counter++;
      }
    }
  }

  return "'" + string + "'" + " was found " + counter + " times";
}

console.log(findStringInText("aa bb cc dd aa", "aa"));

/* if we consider that wanted string is a word in some text, it becomes interesting */
