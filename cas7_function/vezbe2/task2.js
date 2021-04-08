/* Write a function to check whether a string is blank or not. */

function isString(a) {
  if (typeof a === "string" && a === " ") {
    return true;
  }
  return false;
}

console.log(isString(12));
