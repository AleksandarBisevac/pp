/* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 
 */
var num1T2 = 15;
var num2T2 = -22;
var num3T2 = -69;
var num4T2 = 60;
var num5T2 = 66;

if (num1T2>num2T2 && num1T2>num3T2 && num1T2>num4T2 && num1T2>num5T2)
{
    console.log(num1T2);
}
else if (num2T2>num1T2 && num2T2>num3T2 && num2T2>num4T2 && num2T2>num5T2)
{
    console.log(num2T2);
}
else if (num3T2>num1T2 && num3T2>num2T2 && num3T2>num4T2 && num3T2>num5T2)
{
    console.log(num3T2);
}
else if (num4T2>num1T2 && num4T2>num2T2 && num4T2>num3T2 && num4T2>num5T2)
{
    console.log(num4T2);
}
else
{
    console.log(num5T2);
}

//varijablu 1 proverimo u odnosu na sve, pa ako taj uslov nije, ne moramo u drugom uslovu da proveravamo 
// if(a>b && a>c && a>d && a>e){
    //console.log(a);
//}else if(b>c && b>d && b>e){
    //console.log(b);
//}else if(c>d && c>e){
    //console.log(c);
//}else{
    //console.log(e);
//}

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = 10;
var max = a;

if(b>max){
    max=b;
}
if(c>max){
    max=c;
}
if(d>max){
    max=d;
}
if(e>max){
    max=e;
}

console.log(max);

