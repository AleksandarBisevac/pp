/* Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var ab = [];

for (var i = 0; i < a.length; i++) {
    ab.push(a[i]);
    ab.push(b[i]);
}

console.log(ab);


/* variation on task if arrays are not same length */

var c = [2, 5, 3, 6, -5];
var d = [1, 7, -4];
var cd = [];

if (c.length > d.length) {
    for (var i = 0; i < c.length; i++) {
        if (i < d.length) {
            cd.push(c[i]);
            cd.push(d[i]);
        } else if (i === d.length) {
            cd.push(c[i]);
        } else {
            cd.push(c[i]);
        }

    }
} else if (d.length > c.length) {
    for (var i = 0; i < d.length; i++) {
        if (i < c.length) {
            cd.push(d[i]);
            cd.push(c[i]);
        } else if (i === c.length){
            cd.push(d[i]);
        } else {
            cd.push[d[i]];
        }

    }
} else {
    for (var i = 0; i < c.length; i++) {
        cd.push(c[i]);
        cd.push(d[i]);
    }
}
console.log(cd);