/* 1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N
kids.&quot;
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(numOfChildren, partnerName, geoLocation, job) {
  var result =
    "You will be a " +
    job +
    " in " +
    geoLocation +
    ", and married to " +
    partnerName +
    " with " +
    numOfChildren +
    " kids.";

  return result;
}
console.log(tellFortune(9, "Nusreta", "Sarajevo", "siroma'"));
console.log(tellFortune(0, "Adolf", "Berlin", "starlet"));
console.log(tellFortune(3, "Leia", "Coruscant", "princess"));
