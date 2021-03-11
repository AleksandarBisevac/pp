// Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

var number = 6;

switch (number) {
    case 1:
    case 2:
    case 3:
        console.log("Winter");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Spring");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Summer");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Autumn");
        break;

    default:
        console.log("Input must be a number between 1-12");
        break;
}