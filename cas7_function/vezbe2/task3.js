/* Write a function that concatenates a given string n times (default is 1).
"Ha" ->; "Ha"
"Ha", 3 -> "HaHaHa" */

function conc(string, number) {
  result = "";
  counter = string;
  for (var i = 1; i <= number; i++) {
    result += counter;
  }
  return result;
}

console.log(conc("Mjau", 5));
