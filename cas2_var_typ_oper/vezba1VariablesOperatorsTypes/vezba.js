var varijabla1 = "Neki string";
// var 0varijabla2 = "Neka loše deklarisana varijabla";
var varijabla3 = 0.357;
var varijabla4 = true;
var varijabla0 = null;
var _Varijabla = undefined;

var mood = "Danas se osećam baš!";
console.log(mood);

/* -------------------------------*/
var br1 = 213;
var br2 = 321;
var br3 = 123;
var br4 = 312;
var br5 = 231;
var br6 = 132;

var zbir;
var razlika;
var količnik;
var multipl;
var ostatak;

console.log("Zbir je:");
zbir = br1 + br2;
console.log(zbir);

console.log("količnik je:");
količnik = br2 / br4;
console.log(količnik);

console.log("Razlika je:");
razlika = br6 / br3;
console.log(razlika);

console.log("Rezultat je:");
multipl = br5 * br4;
console.log(multipl);

console.log("Ostatak pri deljenju je:");
ostatak = br2 % br4;
console.log(ostatak);
// var a = 3-2-31;
// console.log(a);
/* ------------------------------ */
var kgUg = 1000;
var banana = 1.2;
console.log("Banana u gramima je "+banana*kgUg);

/* ------------------------------ */
var gbUmb = 1000;
var mbUkb = 1000;
var usb1 = 4;
var usb1Mb = 4*gbUmb;
var usb1Kb = usb1Mb*mbUkb;
var vestiKb = 98;
var kolVesti = Math.round(usb1Kb/vestiKb);
console.log("Dodatne memorije imamo: "+usb1*gbUmb);
console.log("Staje "+kolVesti+" vesti u "+usb1+" memorije!");

/*-------------------------------*/
// a*=2; b+=3; c/=5; d-=7;

/*-------------------------------*/
var name = "Aleksandar";
var godine = 28;
var catOwn = true;

console.log(name +" "+ typeof name);
console.log(godine +" "+ typeof godine);
console.log(catOwn +" "+ typeof catOwn);

/*----------------------------- */
console.log(typeof "number");
console.log(typeof true);
console.log(typeof null);
console.log(typeof "false");
console.log(typeof 56);