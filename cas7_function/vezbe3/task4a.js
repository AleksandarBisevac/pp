/* Write a function that reverses a string.
AbvGd -> dGvbA // Output must be a string */

function reverseString(string) {
  var result = "";
  for (var i = 1; i <= string.length; i++) {
    result += string[string.length - i];
  }
  return result;
}

console.log(reverseString("AbvGd"));
