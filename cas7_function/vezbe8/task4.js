/*
Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com
*/

var suggestEmail = (function (name, surname) {
  var email = name + "." + surname + "@gmail.com";
  return email;
})("aleksandar", "bisevac");

console.log(suggestEmail);
