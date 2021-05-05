/*
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20 
*/

var surfRectangle = (function (a, b) {
  return a * b;
})(4, 5);

console.log(surfRectangle);
