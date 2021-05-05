/*
2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/

var output = (function replaceString(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] === "J" && text[i + 1] === "S") {
      result += "**";
      i++;
    } else {
      result += text[i];
    }
  }
  return result;
})("Programming in JS is super interestingJS!");

console.log(output);

/* I'll try to do this one for random input string, looks like fun*/
