/* 9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

function hideEmail(email) {
  var res1 = "";
  var res2 = "";
  var result;
  for (var i = 0; i < email.length; i++) {
    if (email[i] !== "@" && i < 3) {
      res1 += email[i];
    }
    if (email[i] === "@") {
      for (var j = i; j < email.length; j++) {
        res2 += email[j];
      }
    }
    result = res1 + "..." + res2;
  }
  return result;
}

console.log(hideEmail("myemailaddress@bgit.rs"));
