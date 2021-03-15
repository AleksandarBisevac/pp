var fruit = "strawberry";

// if (fruit === "lemon") {
//     console.log("yellow");
// } else if (fruit === "apple") {
//     console.log("green");
// } else if (fruit === "orange") {
//     console.log("orange");
// } else if (fruit === "strawberry") {
//     console.log("red");
// } else {
//     console.log("unknown fruit");
// }

switch (fruit) {
    case "lemon":  //fruit === "lemon" 
        console.log("yellow");
        break;

    case "orange":
        console.log("orange");
        break;

    case "strawberry":
    case "redberry":
        console.log("red"); //štampa yellow ako je jedan od uslova zadovoljen x || y
        break;

    default:
        console.log("unknown fruit");
        break;
}