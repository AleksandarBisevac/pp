/* 13. Write a function to find all the numbers greater than the average. */

function average(nums) {
  var sum = 0;
  var avrg;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  avrg = sum / nums.length;
  return avrg;
}

function greaterThenAverage() {
  var result = [];
  var avrg = average(arguments);
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > avrg) result[result.length] = arguments[i];
  }
  return result;
}

console.log(greaterThenAverage(0, 0, 0, 0, 5));
