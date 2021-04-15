/* 1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
Output: [1, 21, 42, 1000] */

var array = ["1", "21", undefined, "42", "1e+3", Infinity];
function arrToNum() {
  arr2 = [];
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
      arr2[arr2.length] = parseFloat(array[i]);
    }
  }
  return arr2;
}
console.log(arrToNum(array));

/* prvo se parsira pa se onda proverava da li je neki falsy */

/*
// The easiest method to check for a number in JavaScript Number.isFinite():
console.log(Number.isFinite(37)) // true
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isFinite("37")) // false

// Number.isFinite will return false for NaN, Infinity, -Infinity, and it does not coerce types,
// meaning that it will also return false for anything that is not of the number primitive type.

// There is also the global isFinite() function, which will perform type coercion:
console.log(isFinite(37)) // true
console.log(isFinite(NaN)) // false
console.log(isFinite(Infinity)) // false
console.log(isFinite("37")) // true
 */
