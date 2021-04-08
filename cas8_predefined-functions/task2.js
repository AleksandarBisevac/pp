/* 2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: “015false-2247” */

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function arrToString() {
  result = "";
  for (i = 0; i < array.length; i++) {
    if (isFinite(array[i]) && array[i] !== null) {
      result += array[i];
    }
  }
  return result;
}

console.log(arrToString(array));
