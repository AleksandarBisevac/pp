/*
Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars
2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React
3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is
Android

4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative
Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars
*/

class Application {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }
  isCCLicence() {
    return this.licence.toUpperCase() === "CC" ? true : false;
  }
  like() {
    ++this.stars;
  }
  showStars() {
    console.log("Number of stars: " + this.stars);
  }
}
class WebApp extends Application {
  constructor(name, url, technologies, licence, stars) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }
  getData() {
    console.log(
      "Application name: " +
        this.name +
        "\n" +
        "Applicaton url: " +
        this.url +
        "\n" +
        "Technologies: " +
        this.technologies +
        "\n" +
        "Licence: " +
        this.licence +
        "\n" +
        "Stars: " +
        this.stars
    );
  }
  reactBased() {
    return this.technologies.toLowerCase() === "react" ? true : false;
  }
}

class MobileApp extends Application {
  constructor(name, platforms, licence, stars) {
    super(name, licence, stars);
    this.platforms = platforms;
  }
  getData() {
    console.log(
      "Application name: " +
        this.name +
        "\n" +
        "Applicaton platform: " +
        this.platforms +
        "\n" +
        "Licence: " +
        this.licence +
        "\n" +
        "Stars: " +
        this.stars
    );
  }
  forAndroid() {
    return this.platforms.toLowerCase() === "android" ? true : false;
  }
}

var webApp = new WebApp("Tweeter", "nekiurl", "React", "paid", 27);
webApp.like();
webApp.like();
webApp.getData();
console.log(webApp.reactBased());
