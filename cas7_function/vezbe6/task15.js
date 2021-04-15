/* Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
printed as:
*********
* Hello *
* World *
* in *
* a *
* frame *
********* */

function f(array) {
  var elementMax = 0;
  var frame = "";
  var insideFrame = "";
  var output = "";

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > elementMax) {
      elementMax = array[i].length;
    }
    insideFrame += "* " + array[i] + " *" + "\n";
  }
  for (var j = 0; j < elementMax + 4; j++) {
    frame += "*";
  }
  output = frame + "\n" + insideFrame + frame;
  return output;
}
console.log(f(["Hello", "World", "in", "a", "frame"]));
