/* Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true */

function palindrome(string) {
  var reverse = "";
  var stringMod = "";
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      reverse += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== " ") {
      stringMod += string[j];
    }
  }
  if (stringMod === reverse) {
    return true;
  }
  return false;
}

console.log(palindrome("a nut for a jar of tuna"));
