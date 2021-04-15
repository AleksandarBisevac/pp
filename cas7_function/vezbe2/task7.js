// Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

function stringToArray(string) {
  string += "";
  var array = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      array[array.length] = "null";
    } else {
      array[array.length] = string[i];
    }
  }
  return array;
}

console.log(stringToArray("Pozdrav 021"));
