/* Write a function to find the element that occurs most frequently. */

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
