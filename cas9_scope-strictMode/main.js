//block, statements, expression
//block > statement > expression

//bilo šta što se evaluira i vraća neku vrednost je EXPRESSION

4; //literal expression

var a = 4; //desna strane predstavlja expression
var b = 5;

var c = a + b; // desna strana predstavlja expression

var isTrue = true || !false; //desna strana se evaluita i vraća vrednost levo

var isOdd = false;
var isPositive = true;

if (isPositive && isOdd) {
  console.log("positive and odd");
}

//STATEMENT

var isPositive = true; //sve ovo predstavlja jedan statement!
//statement predstavljamo kao "celu rečenicu", dok expression predstavljamo kao "deo rečenice"
//svi statements imaju neki side effect, jer menja naš kod ili mašinu koja ga koristi
// statement se završava sa -> ;

//assigment statements: -> i++;

//expression statements: -> sum();
//                       -> nesto = "nesto";
//                       -> sumResult(a,b);

//declaration statements  -> var nesto;
//                        -> var nesto = "nesto"; **expression and declaration statement
//                        -> function sum(a,b){ return a+b;}
//                        -> var sumResult;

outerLoop: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    console.log(i, j);
    if (i === 2 && j === 2) {
      continue outerLoop;
    }
  }
}

//STRICT MODE
("use strict");
a = 22;
console.log(a); //ovo se neće izvršiti, jer  nismo definisali varijablu a, a pre toga smo stavili "use strict"
