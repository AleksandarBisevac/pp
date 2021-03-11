// Write a program that takes as input a city name and outputs the country where the city is.
// You may choose which cities and countries you want to output yourself, however there has
// to be at least 5 countries and 15 cities. Note that each country must have a different
// number of cities. Input different from the listed cities should output a message&quot;Please
// choose a different city&quot;.

var city = "Ohrid";

switch (city) {
    case "Beograd":
    case "Vranje":
    case "Novi Sad":
    case "Niš":
    case "Subotica":
        console.log("Srbija");
        break;

    case "Banja Luka":
    case "Brčko":
    case "Mostar":
    case "Tuzla":
    case "Sarajevo":
        console.log("Bosna i Hercegovina");
        break;

    case "Osijek":
    case "Zagreb":
    case "Rijeka":
    case "Pula":
    case "Vukovar":
        console.log("Hrvatska");

        break;
    case "Skoplje":
    case "Negotino":
    case "Ohrid":
    case "Struga":
    case "Kumanovo":
        console.log("Makedonija");
        break;

    case "Budva":
    case "Bar":
    case "Podgorica":
    case "Herceg Novi":
    case "Tivat":
        console.log("Crna Gora");

        break;

    default:
        console.log("Please choose a different city");
        break;
}