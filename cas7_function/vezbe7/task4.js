/* 4. It&#39;s hot out! Let&#39;s make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output &quot;NN°F is NN°C.&quot; */

function celsiusToFahrenheit(num) {
  var celsius = num;
  var result = celsius + "°C is " + ((celsius * 9) / 5 + 32) + "°F";
  return result;
}
function fahrenheitToCelsius(num) {
  var fahrenheit = num;
  var result = fahrenheit + "°F is " + ((fahrenheit - 32) * 5) / 9 + "°C";
  return result;
}
console.log(fahrenheitToCelsius(212));
console.log(celsiusToFahrenheit(100));
