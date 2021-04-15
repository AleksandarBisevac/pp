/* Use the following array to make a new one by dividing its values by two and adding 5. If
a given element's value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function wierdArr(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] / 2 + 5;
    if (array[i] === 0) {
      result[result.length] = 20;
    } else {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(wierdArr([3, 500, -10, 149, 53, 414, 1, 19]));
