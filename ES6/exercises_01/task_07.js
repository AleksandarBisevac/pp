/*
Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, &#39;abc&#39;, 45, 28, 553
Output: [45, 553]
*/

const includesNumber = (num, ...arg) => {
  return arg
    .map((element) => parseInt(element))
    .filter((element) => element.toString().includes(num));
};

console.log(includesNumber(4, 23, 11.5, 9, "abc", 45, 28, 553));
