/* do-while garantuje bar jedno izvršenje koda dok se ne proveri zadati uslov */

var count = 10;
var res = 10;
do {
    count++;
    console.log("do while: ",count);
} while (count < 10);

while (res<10) {
    res++;
    console.log("while: ",res);
}