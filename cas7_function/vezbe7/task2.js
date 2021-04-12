/* 2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy&#39;s age.
● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years. */

function dogYears(puppyYears, ownerYears) {
  var result =
    "Your doggie is " +
    puppyYears * 7 +
    " years old in dog years!\nYou are " +
    ownerYears * 7 +
    " old in dog years";
  return result;
}
console.log(dogYears(2, 29));
console.log(dogYears(4, 48));
console.log(dogYears(3, 18));
