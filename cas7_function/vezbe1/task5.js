/* 5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****

*/
function squareMe(num) {
  var row = "";
  for (var i = 1; i <= num; i++) {
    /* creating elements in row */
    for (var j = 1; j <= num; j++) {
      if (i === 1 || i === num || j === num || j === 1) {
        count = "*";
      } else {
        count = " ";
      }
      row += count;
    }
    row += "\n"; /*reset the row before going to a j-for loop again*/
  }
  return row;
}
console.log(squareMe(10));
