/*
In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all
code written in the file follows strict mode.
Create an anonymous immediately-invoking function that will hold the main execution of all
program calls. Writing a simple command console.log(“Hi”) inside this function and running
the code should output “Hi“ in the console.

Create constructor functions with properties representing the following “things”:
● Product - product id (random number of 5 digits generated on every product creation),
name, price (with 2 decimal places), expiration date

● ShoppingBag - a list of products (initially empty; function constructor does not have any
input parameters)
Add getInfo method to Product. It should return a formatted string containing product code
(the first and last letter of the name together with the product id), name and price.
"Banana" > BA32784, Banana, 129.31
Add addProduct method to ShoppingBag. It should receive a Product and add it to the
product list. You can add a product to the list only if it has a valid expiration date.
Add a method to ShoppingBag that calculates the average product price of products in your
product list and prints out this value with the precision of three decimals.
Add getMostExpensive method that finds the most expensive product and prints out its info.
Add calculateTotalPrice method to ShoppingBag that calculates the total price of products
in the shopping bag list.
Create a constructor function with properties representing the following:

● PaymentCard - account balance (number with 2 decimal places), active or inactive status,
valid until date
Create checkoutAndBuy function which receives shopping bag and payment card and prints if
the purchase is successful or not. Purchase is successful only if the amount on the card is greater
or equal to the total price of products in the shopping bag. If there is not enough money, print out
the amount that is missing to complete the purchase.
*/
"use strict";

(function () {
  /* constructor function for products */
  function Product(name, productPrice, expDate) {
    this.productId = Math.floor(Math.random() * 90000);
    this.name = name;
    this.price = parseFloat(productPrice.toFixed(2));
    this.experationDate = expDate;
    this.getInfo = function () {
      this.firstLetter = this.name[0].toUpperCase();
      this.lastLetter = this.name[name.length - 1].toUpperCase();
      this.productCode = this.firstLetter + this.lastLetter + this.productId;
      return this.productCode + ", " + this.name + ", " + this.price;
    };
  }
  /* CONSTRUCTOR PRODUCT END */
  /* constructor function for shopping bag */
  function ShoppingBag() {
    this.list = [];
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.addProduct = function (object) {
      if (object.experationDate >= this.currentYear) {
        this.list.push(object);
      }
    };
    /*!!!*/ this.getAveragePrice = function () {
      this.averagePrice = 0;
      /* !!!! da bi radilo this unutar drugog objekta, a da se odnosi na konstruktor, moramo da stavimo dodatno callback-funkciju => */
      this.list.forEach((element, index) => {
        this.averagePrice += this.list[index].price;
      });
      this.averagePrice = this.averagePrice / this.list.length;
      return parseFloat(this.averagePrice.toFixed(3));
    };
    this.getMostExpensive = function () {
      this.mostExpensive = 0;
      this.mostExpensiveProduct;
      this.list.forEach((element, index) => {
        if (this.list[index].price > this.mostExpensive) {
          this.mostExpensive = this.list[index].price;
          this.mostExpensiveProduct = this.list[index].name;
        }
      });
      return this.mostExpensiveProduct + " " + this.mostExpensive;
    };
    this.getTotalPrice = function () {
      this.totalPrice = 0;
      this.list.forEach((element, index) => {
        this.totalPrice += this.list[index].price;
      });
      return this.totalPrice;
    };
  }
  /* CONSTRUCTOR SHOPPBAG END */
  /* constructor function for shopping bag */

  function PaymantCard(accBal, status, date) {
    this.accountBalance = parseFloat(accBal.toFixed(2));
    this.status = (function () {
      status ? "Card is active!" : "Card is not active";
    })();
    this.valid = "Valid until " + date;
  }

  /* CONSTRUCTOR SHOPPBAG END */

  function checkOutBuy(shoppB, card) {
    if (shoppB.getTotalPrice() < card.accountBalance) {
      console.log("Product list");
      console.log("________________________");
      shoppB.list.forEach(function (element, index) {
        console.log(shoppB.list[index].getInfo());
      });
      console.log("Total price is: " + shoppB.getTotalPrice());
      console.log(
        "The most expensive product is: " + shoppB.getMostExpensive()
      );
      console.log("________________________");
      console.log("Purchase is successful!");
    } else {
      console.log("Total price is: " + shoppB.getTotalPrice());
      console.log("Total amount of money on card: " + card.accountBalance);
      console.log("Not enough money on card!");
    }
  }

  var product1 = new Product("Banana", 135.99, 2022);
  var product2 = new Product("Burek", 200.24, 2021);
  var product3 = new Product("Pasulj", 131.321, 2025);
  var shoppingBag = new ShoppingBag();
  var costumerCard = new PaymantCard(1023.456, true, 2028);
  shoppingBag.addProduct(product1);
  shoppingBag.addProduct(product2);
  shoppingBag.addProduct(product3);

  checkOutBuy(shoppingBag, costumerCard);
})();
