/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38
 */

var nekiBroj = 31;
var razlika = nekiBroj - 13;

if (razlika <= 0){
    razlika = -1 * razlika;
}

//  if (nekiBroj > 13){
//      console.log(razlika13 * 2);
//  }else{
//      console.log(razlika13);
//  }
(nekiBroj >= 13) ? console.log(razlika * 2) : console.log(razlika);
