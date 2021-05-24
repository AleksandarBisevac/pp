/*
6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.
*/

// a //

var listOfProducts = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

// b //
function getTotalPrice(params, prop) {
  var sum = 0;
  for (var i in params) {
    sum += params[i][prop];
  }
  return sum;
}
console.log("Total price: ", getTotalPrice(listOfProducts, "price"));

// c //

function getAveragePrice(params) {
  var sum = 0;
  for (var i in params) {
    sum += params[i].price;
  }
  return sum / params.length;
}
console.log("Average price: ", getAveragePrice(listOfProducts));

// d //

function getMostExpensive(params) {
  var mostExpensive = params[0].price;
  for (var i in params) {
    if (params[i].price > mostExpensive) {
      mostExpensive = params[i].price;
    }
  }
  return mostExpensive;
}
console.log("Most expensive price :", getMostExpensive(listOfProducts));
