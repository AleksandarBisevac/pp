/* Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2] 
Output array: [4, 6, 8]*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;

// for (i = 0; i < a.length; i++) {
//     if (a[i] === e) {
//         a.splice(i, 1)
//         i--;
//     }
// }
// console.log(a);

var b = [];

for(var i = 0; i < a.length; i++){
    if(a[i] != 2){
        b.push(a[i]);
    }
}
a = b;
console.log(a);
