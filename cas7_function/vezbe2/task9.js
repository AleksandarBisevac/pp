/* Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" ->; "My_random_string";
"My random string", "+"" ->; "My+random+string";
"My random string" ->; "My-random-string" */

function replaceSpace(string, separator) {
  result = "";
  for (var i = 0; i < string.length; i++) {
    if (separator === undefined) {
      separator = "-";
    }
    if (string[i] === " ") {
      result += separator;
      continue;
    }
    result += string[i];
  }
  return result;
}

console.log(replaceSpace("My random string", "/"));
