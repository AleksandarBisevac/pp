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
function Application(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}
Application.prototype.isCCLicence = function () {
  return this.licence.toUpperCase() === "CC" ? true : false;
};

Application.prototype.like = function () {
  ++this.stars;
};

Application.prototype.showStars = function () {
  console.log("Number of stars: " + this.stars);
};

function WebApp(name, url, technologies, licence, stars) {
  Application.call(this, name, licence, stars);
  this.url = url;
  this.technologies = technologies;
}
WebApp.prototype = Object.create(Application.prototype);
WebApp.prototype.constructor = Application;

function MobileApp(name, platforms, licence, stars) {
  Application.call(this, name, licence, stars);
  this.platforms = platforms;
}
MobileApp.prototype = Object.create(Application.prototype);
MobileApp.prototype.constructor = Application;

WebApp.prototype.getData = function () {
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
};

WebApp.prototype.reactBased = function () {
  return this.technologies.toLowerCase() === "react" ? true : false;
};

MobileApp.prototype.getData = function () {
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
};

MobileApp.prototype.forAndroid = function () {
  return this.platforms.toLowerCase() === "android" ? true : false;
};

var webApp = new WebApp("Tweeter", "nekiurl", "React", "paid", 27);

webApp.like();
webApp.like();
webApp.getData();
console.log(webApp.reactBased());
