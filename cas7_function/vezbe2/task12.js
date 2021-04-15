/* Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

function retirement(curDate, type, dateOfBirth) {
  var PersonAge = curDate - dateOfBirth;
  var yearsLeft = 0;
  var retired = "Person is retired";
  if (type === "male") {
    if (PersonAge < 65) {
      yearsLeft = 65 - PersonAge;
      var message = "Years to retire " + yearsLeft;
      return message;
    } else {
      return retired;
    }
  }
  if (type === "female") {
    if (PersonAge < 60) {
      yearsLeft = 60 - PersonAge;
      message = "Years to retire " + yearsLeft;
      return message;
    } else {
      return retired;
    }
  }
}

console.log(retirement(2020, "male", 1966));
