/* 
3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

// a //
var someArr = [1, 2, 9, 2, 1];

function isOddArr(array) {
  if (array.push() % 2 !== 0) return true;
  return false;
}

var arr = isOddArr(someArr);
console.log(arr);

/*Normally, we would do array.length, it's also built in object function, but it was interesting to try should this method work. So, it works.*/

// b //
function countEl(array) {
  var output;
  if (array.length % 2 === 0) {
    return "ERROR! Array has even number of elements!";
  } else {
    output = array.length / 2 + 0.5;
    return output;
  }
}

var checkFunction = countEl(someArr);
console.log(checkFunction);

/* I am not sure what was the goal of section B of exercise, but I hope I got it. */
