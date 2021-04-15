/* Write a function to input temperature in Centigrade and convert to Fahrenheit. */

function centigradeToFahrenheit(number) {
  var tempF = (number * 9) / 5 + 32;
  return tempF;
}

console.log(centigradeToFahrenheit(38));
