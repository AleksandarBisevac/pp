/* Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */

function combArrays(array1, array2) {
  var result = [];
  var biggerArr = 0;
  if (array1.length > array2.length) {
    biggerArr = array1.length;
  } else {
    biggerArr = array2.length;
  }

  for (var i = 0; i < biggerArr; i++) {
    if (i < array1.length) {
      result[result.length] = array1[i];
    }
    if (i < array2.length) {
      result[result.length] = array2[i];
    }
  }
  return result;
}

console.log(combArrays(["a", "b", "c"], [1, 2, 3]));
