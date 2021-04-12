/* 3. Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
X&quot;
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calculateSupply(age, amountPerDay) {
  var maxAge = 80;
  var restSupply = (maxAge - age) * 365 * amountPerDay;
  var result =
    "You will need " +
    parseInt(restSupply) +
    " snacks to last you until the ripe old age of " +
    maxAge;
  return result;
}

console.log(calculateSupply(29, 1.5));
console.log(calculateSupply(7, 2));
console.log(calculateSupply(55, 1));
