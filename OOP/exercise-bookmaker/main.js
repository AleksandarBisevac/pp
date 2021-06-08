/*
Bookmaker’s

In your IDE of choice, create a new JavaScript file named booking-house.js and make it so
that all code written in the file follows JS strict mode.
Create an anonymous immediately-invoking function that will hold main execution of all program
calls. Make sure that functions that you write in this function are pure functions.
Create constructor functions with properties representing the following:
● Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
● Person - name, surname, date of birth
● Player - person, bet amount, country (instance of Country)
● Address - country, city, postal code, street and number
● BettingPlace - address and list of players (initially empty)
● BettingHouse - competition, list of betting places (initially empty) and number of players
Create continents as constants (objects that can not change). So, when passing a continent as a
parameter, you should pass Continent.ASIA.
Add a method to Person that returns a formatted string containing the name, surname and date
of birth of the person (date of birth in dd.mm.yy format).
Add a method to Address that returns a formatted string like the following one:
Nemanjina 4, 11000 Beograd, SR
Add a method to Player that returns a formatted string containing a country, expected win
amount (odds * bet amount) and person data.
SR, 1050.00 eur, Pera Peric, 29 years
Add a method to BettingPlace that returns a formatted string containing a street (without a
number), postal code and city, and sum of all bet amounts of that place.
Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
Add a method to BettingPlace that adds a player to the players list of a betting place.
Inside your immediately-invoking function, add a function that returns a created Player.
Inside your immediately-invoking function, add a function that creates a BettingPlace.
Create an instance of the BettingHouse that receives the name of competition.
Create four players with random data. Create two betting places. Add created players as you wish
to Betting places. Add betting places to the betting house.
Display all betting house data in the following manner:

Football World Cup Winner, 2 betting places, 4 bets
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
SR, 1050.00 eur, Pera Peric, 29 years
SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
GR, 1050.00 eur, Pera Peric, 29 years
SR, 1050.00 eur, Pera Peric, 29 years

There are 3 bets on Serbia
*/

(function () {
  "use strict";
  /*
                CONSTRUCTOR FUNCTIONS
*/
  function Country(name, odds, continent) {
    this.countryName = name;
    this.countryOdds = odds;
    this.continent = continent;
    this.countryShort = function () {
      var countryArr = this.countryName.split("");
      var lastCountryLetter = "";
      var vowels = ["A", "E", "I", "O", "U"];
      for (var i = 1; i < countryArr.length; i++) {
        if (!vowels.includes(countryArr[i].toUpperCase())) {
          lastCountryLetter = countryArr[i].toUpperCase();
          break;
        }
      }
      return countryArr[0] + lastCountryLetter;
    };
  }

  function Person(name, lastname, birthday) {
    this.name = name;
    this.lastName = lastname;
    this.dayOfBirth = new Date(birthday).getFullYear();
    this.getData = function () {
      var personDate = new Date(birthday).toLocaleDateString("en-GB");
      var dateSplit = personDate.split("/");
      dateSplit = dateSplit[0] + "." + dateSplit[1] + "." + dateSplit[2];
      return "" + this.name + " " + this.lastName + ", " + dateSplit;
    };
  }

  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.playerCountry = country;
    this.getData = function () {
      var currentYear = new Date();
      var playerYear = this.person.dayOfBirth;
      currentYear = currentYear.getFullYear();
      return (
        this.playerCountry.countryShort() +
        ", " +
        this.playerCountry.countryOdds * this.betAmount +
        " eur, " +
        this.person.name +
        " " +
        this.person.lastName +
        ", " +
        (currentYear - playerYear) +
        " years"
      );
    };
  }

  function Address(country, city, postalCode, street, streetNum) {
    this.country = country.countryName;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNum;
    this.getData = function () {
      return (
        this.street +
        " " +
        this.streetNumber +
        ", " +
        this.postalCode +
        ", " +
        this.city +
        ", " +
        this.country
      );
    };
  }

  function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.addPlayer = function (player) {
      this.listOfPlayers.push(player);
    };
    this.getData = function () {
      var sumOfBets = 0;
      for (var i = 0; i < this.listOfPlayers.length; i++) {
        sumOfBets += this.listOfPlayers[i].betAmount;
      }
      return (
        this.address.street +
        ", " +
        this.address.postalCode +
        " " +
        this.address.city +
        ", sum of all bets: " +
        sumOfBets +
        "eur"
      );
    };
  }

  function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.addBettingPlace = function (betplace) {
      this.listOfBettingPlaces.push(betplace);
    };
    this.sumOfPlayers = function () {
      var sum = 0;
      this.listOfBettingPlaces.forEach((element) => {
        sum += element.listOfPlayers.length;
      });
      return sum;
    };
    this.getData = function () {
      var bettingPlacesData = "";
      this.listOfBettingPlaces.forEach((element) => {
        bettingPlacesData += element.getData() + "\n";
        for (var i = 0; i < element.listOfPlayers.length; i++) {
          bettingPlacesData += element.listOfPlayers[i].getData() + "\n";
        }
      });
      return (
        this.competition +
        ", " +
        this.listOfBettingPlaces.length +
        " betting places, " +
        this.sumOfPlayers() +
        " bets" +
        "\n" +
        bettingPlacesData
      );
    };
  }

  /******************************************************************* */

  var Continent = {
    ASIA: "AS",
    EUROPE: "EU",
    NORTH_AMERICA: "NA",
    SOUTH_AMERICA: "SA",
    AUSTRALIA: "AU",
    AFRICA: "AF",
  };

  function createPlayer(name, lastname, dateOfBirth, betAmount, country) {
    var person = new Person(name, lastname, dateOfBirth);
    var player = new Player(person, betAmount, country);
    return player;
  }

  function createBettingPlace(country, city, postalCode, street, streetNum) {
    var address = new Address(country, city, postalCode, street, streetNum);
    var bettingPlace = new BettingPlace(address);
    return bettingPlace;
  }
  var serbia = new Country("Serbia", 1.5, Continent.EUROPE);
  var hungary = new Country("Hungary", 2.6, Continent.EUROPE);
  var player1 = createPlayer("Niko", "Nikić", "03/13/1992", 2000, serbia);
  var player2 = createPlayer("Biko", "Bikić", "04/13/1993", 5400, serbia);
  var player3 = createPlayer("Pišta", "Mesaroš", "01/18/1971", 1500, hungary);
  var player4 = createPlayer("Ištvan", "Kereš", "04/13/1988", 3200, hungary);
  var player5 = createPlayer("Ivana", "Ivić", "08/23/1994", 1200, serbia);
  var bettingPlace1 = createBettingPlace(
    serbia,
    "Beograd",
    11000,
    "Nemanjina",
    4
  );
  var bettingPlace2 = createBettingPlace(
    hungary,
    "Beograd",
    11000,
    "Nemanjina",
    4
  );

  var fChamp = new BettingHouse("Mundial");
  fChamp.addBettingPlace(bettingPlace1);
  fChamp.addBettingPlace(bettingPlace2);

  bettingPlace1.addPlayer(player1);
  bettingPlace1.addPlayer(player2);
  bettingPlace2.addPlayer(player3);
  bettingPlace2.addPlayer(player4);
  bettingPlace2.addPlayer(player5);

  console.log(fChamp.getData());
})();
