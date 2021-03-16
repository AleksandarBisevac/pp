/* Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

< 60% F
< 70% D
< 80% C
< 90% B
< 100% A */

var students = [["David", 80], ["Marko", 77], ["Danny", 88], ["John", 95], ["Thomas", 68]];
var avgMark = 0;

for (var i = 0; i < students.length; i++) {
    avgMark += students[i][1];
}
avgMark = avgMark / students.length;
console.log("Average mark is ", avgMark);

if (avgMark<60) {
    console.log("Corresponding grade is F");
}else if(avgMark>=60 && avgMark<70 ){
    console.log("Corresponding grade is D"); 
}else if(avgMark>=70 && avgMark<80){
    console.log("Correspondning grade is C");
}else if(avgMark>=80 && avgMark<90){
    console.log("Corresponding grade is B");
} else {
    console.log("Corresponding grade is A");
}