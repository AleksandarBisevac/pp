/* Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function someArrFun(n, value) {
  result = [];
  for (var i = 0; i < n; i++) {
    if (value === undefined) {
      value = null;
    }
    result[result.length] = value;
  }
  return result;
}

console.log(someArrFun(6));
