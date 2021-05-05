/*
Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!
*/

var givenPass = "JSGuru696";

var checkPass = (function (inputPassword) {
  function successCallback(password) {
    for (var i = 0; i < password.length; i++) {
      if (!isNaN(password[i]) && password.length >= 6) {
        return "Your password is cool!";
      }
    }
  }
  function errorCallback(password) {
    var counter = 0;
    for (var i = 0; i < password.length; i++) {
      if (!isNaN(password[i])) {
        counter++;
      }
    }
    if (counter === 0 || password.length < 6) {
      return "Your password is not cool!";
    }
  }
  if (errorCallback(inputPassword)) {
    return errorCallback(inputPassword);
  } else if (successCallback(inputPassword)) {
    return successCallback(inputPassword);
  } else {
    return "Error, type password again!";
  }
})(givenPass);

console.log(checkPass);
