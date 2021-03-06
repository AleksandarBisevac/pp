/* 
Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
 */

// var num1T3 = 0;
// var num2T3 = 0;
// var num3T3 = 4;

// if (num1T3 > num2T3 && num2T3 > num3T3){
//     console.log("Redosled je: "+num1T3,num2T3,num3T3);
//    }else if (num1T3 > num2T3 && num2T3 < num3T3)

//        if (num1T3 > num3T3){
//        console.log("Redosled je: "+num1T3,num3T3,num2T3);
//        }else{
//        console.log("Redosled je: "+num3T3,num1T3,num2T3)
   
//    }else if (num2T3>num1T3 && num1T3>num3T3){
//        console.log("Redosled je: "+num2T3,num1T3,num3T3);
   
//    }else if (num2T3 > num1T3 && num2T3 < num3T3)
//        if (num1T3 > num3T3){
//            console.log("Redosled je: "+num2T3,num1T3,num3T3);
//        }else{
//            console.log("Redosled je: "+num2T3,num3T3,num2T3);
   
//    }else if (num3T3 > num1T3 && num1T3 < num2T3)
//        if (num3T3 > num2T3){
//            console.log("Redosled je: "+num3T3+num2T3+num1T3);
//        }else{
//            console.log("Redosled je: "+num3T3+num1T3+num2T3);
//        }



var x = 0;
var y = -1;
var z = 5;

var max = 0;
var mid = 0;
var min = 0;

/* Prvi uslov jeste da proverimo da li je jedna od tri zadate varijable veća ili jednaka od druge
dve. Uzimamo varijablu x
Ako jeste, ispitujemo apsolutni slučaj, kada je x varijabla različita od druge y i z, a jedna
od druge dve preostale varijable veća od treće, npr. y > z  */

if(x >= y && x >= z) {
    if(y > z && x != y && x != z) {
       max = x;
       mid = y;
       min = z;
/* Ukoliko to nije slučaj, moramo da proverimo da li su te dve varijable jednake međusobno
a različite od ispitivane varijable x*/
    } else if(y === z && x != y){
        max = x;
        mid = y;
        min = y;
/* Ukoliko to nije slučaj, proveravamo da li je možda x varijabla jednaka  sa jednom od dve 
preostale varijable, a da su one međusobno različite (y i z).  I dalje važi  x >= y && x >= z */
    } else if(x === y && x != z){
        max = x;
        mid = x;
        min = z;
    } else if(x === z && x != y){
        max = x;
        mid = x;
        min = y;
/*Jedini preostao slučaje jeste da je x > z > y */
    }else{
        max = x;
        mid = z;
        min = y;
    }
/* ISTO URADIMO I ZA OSTALE DVE VARIJABLE Y i Z */
} else if(y >= x && y >= z) {
    if(x > z && y != z && y != x) {
       max = y;
       mid = x;
       min = z;

    } else if(x === z && y != x){
        max = y;
        mid = x;
        min = x;
    } else if(y === x && y != z){
        max = y;
        mid = y;
        min = z;
    } else if(y === z && z != x){
        max = y;
        mid = y;
        min = x;
    
    } else{
        max = y;
        mid = z;
        min = x;
    }
} else if(z >= x && z >= y) {

    if(x > y && z != x && z != y) {
       max = z;
       mid = x;
       min = y;

    } else if(x === y && z != x){
        max = z;
        mid = x;
        min = x;
    } else if(z === x && z != y){
        max = z;
        mid = z;
        min = y;
    } else if(z === y && z != x){
        max = z;
        mid = z;
        min = x;
    
    }else{
        max = z;
        mid = y;
        min = x;
    }

/* Ukoliko nijedan od uslova gore nije ispunjen, to nas dovodi do slučaja da su sve tri varijable
međusobno jednake i da važi sledeće */

} else{
        x=y=z=max=mid=min;
    }

console.log("Ovo je redosled brojeva: "+max+", "+mid+", "+min);


if(x>y && x>z){
    if (y>z){
        console.log(x,y,z);
    }
}else if(y>x && y>z){
    if (x>z){
        console.log(y,x,z);
    }else{
        console.log(y,z,x);
    }
}else if(x>y){
    console.log(z,x,y);
}else {
    console.log(z,y,x);
}