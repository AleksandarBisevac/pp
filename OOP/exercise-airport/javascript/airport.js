(function () {
  "use strict";
  /* CONSTRUCTOR F-s */
  function Person(name, surname) {
    this.passangerName = name + "";
    this.passangerSurname = surname + "";
    this.getData = function () {
      return this.passangerName + " " + this.passangerSurname;
    };
  }
  //
  function Seat(num, category) {
    this.seatNumber = (function () {
      var seatN;
      if (isFinite(num)) {
        if (num > 100 || num < 10) {
          seatN = Math.floor(Math.random() * (100 - 10) + 10);
          return seatN;
        } else {
          return parseInt(num);
        }
      } else {
        seatN = Math.floor(Math.random() * (100 - 10) + 10);
        return seatN;
      }
    })();
    this.seatCategory = (function () {
      if (category.toUpperCase() !== "B") {
        return "E";
      } else return category;
    })();
    this.getData = function () {
      return this.seatNumber + ", " + this.seatCategory;
    };
  }
  //
  function Passanger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + ", " + this.person.getData();
    };
  }
  //
  function Flight(relation1, relation2, date) {
    this.flightRelationStart = relation1;
    this.flightRelationEnd = relation2;
    this.flightDate = new Date(date).toLocaleDateString("en-GB");
    this.dateSplit = this.flightDate.split("/");
    this.dateSplit =
      this.dateSplit[1] + "." + this.dateSplit[0] + "." + this.dateSplit[2];
    this.passangerList = [];
    this.addPassanger = function (passanger) {
      this.passangerList.push(passanger);
    };
    this.getData = function () {
      var vocals = ["A", "E", "I", "O", "U"];
      function getConsonants() {
        var relation1ConsonArr = relation1.toUpperCase().split("");
        var relation2ConsonArr = relation2.toUpperCase().split("");
        var rel1Cons = "";
        var rel2Cons = "";
        var filterrelation1ConsonArr = relation1ConsonArr.filter(function (
          element
        ) {
          return vocals.indexOf(element) === -1;
        });
        var filterrelation2ConsonArr = relation2ConsonArr.filter(function (
          element
        ) {
          return vocals.indexOf(element) === -1;
        });
        rel1Cons =
          filterrelation1ConsonArr[0] +
          filterrelation1ConsonArr[filterrelation1ConsonArr.length - 1];
        rel2Cons =
          filterrelation2ConsonArr[0] +
          filterrelation2ConsonArr[filterrelation2ConsonArr.length - 1];
        return [rel1Cons, rel2Cons];
      }

      var passangers = "";
      this.passangerList.forEach(function (element) {
        passangers += element.getData() + "\n";
      });
      return (
        this.dateSplit +
        ", " +
        getConsonants()[0] +
        " - " +
        getConsonants()[1] +
        "\n" +
        passangers
      );
    };
  }

  //
  function Airport() {
    this.airportName = "Nikola Tesla";
    this.flights = [];
    this.addFlight = function (flight) {
      this.flights.push(flight);
    };
    this.getTotalPassangers = function () {
      var totalPassangers = 0;
      this.flights.forEach(function (element) {
        totalPassangers += element.passangerList.length;
      });
      return totalPassangers;
    };
  }

  /* CONSTRUCTORS FUNCTIONS END! */

  /* functions that create objects */
  function createPassanger(name, surname, seat, category) {
    var person = new Person(name, surname);
    var personSeat = new Seat(seat, category);
    var passanger = new Passanger(person, personSeat);
    return passanger;
  }
  function createFlight(relation1, relation2, date) {
    var flight = new Flight(relation1, relation2, date);
    return flight;
  }
  /* */
  try {
    var airport = new Airport();
    var passanger1 = createPassanger("Aleksandar", "Biševac", 27, "B");
    var passanger2 = createPassanger("Boris", "Perković", 13, "B");
    var passanger3 = createPassanger("Ksenija", "Milošević", 69, "v");
    var passanger4 = createPassanger("Mileva", "Marić", 96, "e");
    var flight1 = createFlight("Belgrade", "New York", "2021-03-13");
    var flight2 = createFlight("Barcelona", "Belgrade", "2021-04-15");
    flight1.addPassanger(passanger1);
    flight1.addPassanger(passanger4);
    flight2.addPassanger(passanger3);
    flight2.addPassanger(passanger2);

    airport.addFlight(flight1);
    airport.addFlight(flight2);
  } catch (error) {
    console.log("Error message : " + error.message);
  }

  console.log(
    "Airport: " +
      airport.airportName +
      " Total passangers: " +
      airport.getTotalPassangers()
  );
  airport.flights.forEach(function (element, index) {
    console.log(airport.flights[index].getData());
  });
})();
