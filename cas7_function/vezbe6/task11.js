/* Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned. */

function f(array) {
  var firstEl = array[0];
  var lastEl = array[array.length - 1];
  var midEl;
  var result;
  if (array.length % 2 !== 0) {
    midEl = array[array.length / 2 - 0.5];
    result = firstEl + " " + midEl + " " + lastEl;
    return result;
  } else {
    result = firstEl + " " + lastEl;
    return result;
  }
}

console.log(f([1, 2, 3, 4]));
