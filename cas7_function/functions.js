function getMinElementFromArray(array) {
  var min = array[0];
  var index = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }
  return [min, index];
}

var arr = [222, 3, -4, 55, -12, 120, -6];
var result = getMinElementFromArray(arr);
console.log(result);

function isInArray(niz, element) {
  for (var i = 0; i < niz.length; i++) {
    if (niz[i] === element) {
      return true;
    }
  }
  return false;
}
var element = 55;
var res = isInArray(arr, element);
console.log(res);

function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var zbir = sum(3, 4, 5, 6);
console.log(zbir);
