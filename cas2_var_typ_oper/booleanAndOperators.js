/*var a = true;
var b = true;
var c = !a;
console.log(c);
var cc = a && b; // && - a i b
console.log(cc);
var ccc = a||b; // || - a ili b
console.log(ccc);
*/
// true  && true = true
// false && true = false
// true && false = false
// false && false = false

// true  || true = true
// false ||true = true
// true || false = true
// false || false = false

//!!"somestring" dupla negacija konvertuje tipove podataka u boolean

// var a = 4;
// var c = 4;
// var result = a===c;
// console.log(result);

// var a = 4;
// var c = "4";
// var result = a!==c;
// console.log(result);

/* Napiši program koji poredi dva broja i prikazuje veći. Rezultat treba da se prikazuje u konzoli*/
var a = 2;
var b = 3;

if (a>b) {
    console.log(a);
}
else if (b>a) {
    console.log(b);
}
else {
    console.log("Brojevi su isti!");
}
