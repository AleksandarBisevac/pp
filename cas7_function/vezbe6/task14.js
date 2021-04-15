/* The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40 */

function bmi(weight, height) {
  var result = weight / (height * height);
  var message;
  switch (true) {
    case result < 15:
      message = "Starvation: less than 15";
      break;
    case result < 17.5 && result >= 15:
      message = "Anorexic: less than 17.5";
      break;
    case result < 18.5 && result >= 17.5:
      message = "Underweight: less than 18.5";
      break;
    case result < 25 && result >= 18.5:
      message = "Ideal: greater than or equal to 18.5 but less than 25";
      break;
    case result < 30 && result >= 25:
      message = "Overweight: greater than or equal to 25 but less than 30";
      break;
    case result < 40 && result >= 30:
      message = "Obese: greater than or equal to 30 but less than 40";
      break;
    case result >= 40:
      message = "Morbidly obese: greater than or equal to 40";
      break;
  }
  return message;
}

console.log(bmi(98, 1.81));
