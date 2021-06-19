(function () {
  "use strict";
  /******************************************************* 
  CONSTRUCTORS FUNCTIONS ! 
  ********************************************************/
  function Person(name, surname) {
    this.passangerName = name + "";
    this.passangerSurname = surname + "";
    this.getData = function () {
      return this.passangerName + " " + this.passangerSurname;
    };
  }
  //
  function Seat(seatNumber, category) {
    this.seatNumber = seatNumber;
    this.seatCategory = category;
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
    this.flightDate = new Date(date);
    this.passangerList = [];
    this.addPassanger = function (passanger) {
      this.passangerList.push(passanger);
    };
    this.getData = function () {
      var passangers = "";
      this.passangerList.forEach(function (element) {
        passangers += element.getData() + "\n";
      });
      return date + ", " + relation1 + " - " + relation2 + "\n" + passangers;
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
    this.getData = function () {
      var flights = "";
      airport.flights.forEach(function (element, index) {
        flights += airport.flights[index].getData() + "\n";
      });
      return (
        "Airport: " +
        airport.airportName +
        " Total passangers: " +
        airport.getTotalPassangers() +
        "\n" +
        flights
      );
    };
  }
  /******************************************************* 
  CONSTRUCTORS FUNCTIONS END! 
  ********************************************************/

  /******************************************************* 
  functions that create objects
  ********************************************************/

  // CREATE PASSANGER FUNCTION
  function createPassanger(name, surname, seat, category) {
    function checkSeat(num) {
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
    }
    function checkSeatCategory(category) {
      if (category.toUpperCase() !== "B") {
        return "E";
      } else return category.toUpperCase();
    }
    var seatNumber = checkSeat(seat);
    var seatCategory = checkSeatCategory(category);
    var person = new Person(name, surname);
    var personSeat = new Seat(seatNumber, seatCategory);
    var passanger = new Passanger(person, personSeat);
    return passanger;
  }
  // CREATE FLIGHT FUNCTION
  function createFlight(relation1, relation2, date) {
    function getConsonants(relation) {
      var vocals = ["A", "E", "I", "O", "U"];
      var relationConsonArr = relation.toUpperCase().split("");
      var relShort = "";
      var filterrelationConsonArr = relationConsonArr.filter(function (
        element
      ) {
        return vocals.indexOf(element) === -1;
      });
      relShort =
        filterrelationConsonArr[0] +
        filterrelationConsonArr[filterrelationConsonArr.length - 1];
      return relShort;
    }
    function displayDate() {
      var dateSplit;
      var flightDate = new Date(date).toLocaleDateString("en-GB");
      dateSplit = flightDate.split("/");
      dateSplit = dateSplit[1] + "." + dateSplit[0] + "." + dateSplit[2];
      return dateSplit;
    }
    var rel1 = getConsonants(relation1);
    var rel2 = getConsonants(relation2);
    var flightDate = displayDate(date);
    var flight = new Flight(rel1, rel2, flightDate);
    return flight;
  }

  /******************************************************* 
  functions that create objects END!
  ********************************************************/
  try {
    var airport = new Airport();
    var passanger1 = createPassanger("Aleksandar", "Biševac", 27, "B");
    var passanger2 = createPassanger("Boris", "Perković", 13, "b");
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

  console.log(airport.getData());
})();
