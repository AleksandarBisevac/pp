/* Write a program to find the most frequent item of an array.
[3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3] */

function mostFreq(array) {
  var mostFrequent;
  var counter = 0;
  var maxCounter = 0;
  for (var i = 0; i < array.length; i++) {
    maxCounter = 0;
    for (var j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        maxCounter++;
      }
      if (maxCounter > counter) {
        counter = maxCounter;
        mostFrequent = array[j];
      }
    }
  }
  return mostFrequent;
}

console.log(mostFreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

//pretpostavi da je result 0; napravi jednu varijablu koja će prikazati koji element se naj pok
//sa dve for petlje, jedna za iteraciju svakog člana niza, druga za poređenje tog člana sa drugima
//counter u drugoj petlji, ako je veći od result, onda je result counter a varij je taj element
