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
      var count = ""; //takes current value and adds it to the row
      if (i === 1 || i === num || j === num) {
        count = "*";
      } else if (i !== 1 && (j === 1 || j === num)) {
        count = "*";
      } else {
        count = " ";
      }
      row += count;
    }
    console.log(row);
    row = ""; /*reset the row before going to a j-for loop again*/
  }
}
squareMe(33);
