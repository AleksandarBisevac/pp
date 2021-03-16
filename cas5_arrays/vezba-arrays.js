// Write an array of months in a year. Using console.log display June, October and January
// from the array.

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[5]+" "+months[9]+" "+months[0]);

/* 2. Write an arrays of days in a week. Using console.log display Sunday from the array. */

var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
console.log(week[6]);

// Print all negative elements from the array [2, -4, 5, -2, -11].

var array1 = [2, -4, 5, -2, -11];
console.log(array1[1]+" "+array1[3]+" "+array1[4]);

/* Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9]. */

var array2 = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(array2[0]+" "+array2[3]+" "+array2[6]);


/* What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]]; 
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.*/

var array3 =  [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(array3[0][3]);
console.log("Index number is [0][3]");
console.log(array3[2]);
console.log(array3[2][1]);
