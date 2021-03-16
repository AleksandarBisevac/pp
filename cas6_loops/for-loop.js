// var punishment = "";
// for(var i = 1; i <= 100; i++){
//     punishment+="I will never do this again!\n";
    
// }
// console.log(punishment);

var sum = 0;
for(var i = 1; i <= 100; i++){
    sum = sum + i;
}

console.log(sum);

var sum2 = 0;
for(var i = 1; 1 <= 100; i++){
    if (sum2 === 0){
        console.log("Current sum is: ", sum2);
    }
    sum2 = sum2 + i;

    if(sum2 > 30){
        break;
    }
    console.log("Adding " + i + " Current sum is: "+ sum2);
}

var sum3 = 0;
for(var i = 1; 1 <= 100; i++){
    if (sum3 === 0){
        console.log("Current sum is: ", sum3);
    }
    console.log("Adding " + i + " Current sum is: "+ sum3);
    sum3 = sum3 + i;

    if(sum3 > 30){
        break;
    }
    
}


/* NESTED FOR LOOP */
