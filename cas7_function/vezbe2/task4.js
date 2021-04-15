/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function stringLength(string) {
  string = string + "";
  var n = 0;
  for (i = 0; i < string.length; i++) {
    n++;
  }
  return n;
}

console.log(stringLength(22));
