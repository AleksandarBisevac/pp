/*
MOVIE HANDLERS
*/
var movieTitle = document.querySelector("#title");
var movieLength = document.querySelector("#lenght");
var movieGenre = document.querySelector("#genre");
var date = document.querySelector("#date");
var genreBtn = document.querySelector("#genre-select-btn");
var genreErr = document.querySelector("#genre-err");
var movieInfo = document.querySelector("#movie-info");
var movieErr = document.querySelector("#movie-err");
var programInfo = document.querySelector("#program-info");
var programErr = document.querySelector("#program-err");
var programSelect = document.querySelector("#program-select");
var movieList = document.querySelector("#movie-list");
var movieSelect = document.querySelector("#movie-select");
var btnProgram = document.querySelector("#program-select-btn");
var movieBtn = document.querySelector("#add-movie-btn");

var festival = new Festival();

function createMovie(title, length, genre) {
  var check = 0;
  var movieT = checkTitle(title);
  var movieL = checkLength(length);
  var movieG = checkGenre(genre);

  function checkTitle(t) {
    t = title.value;
    if (t) {
      check++;
      return t;
    } else {
      genreErr.innerHTML += "Insert Movie title!<br />";
    }
  }
  function checkLength(l) {
    l = parseInt(length.value);
    if (!l && !isFinite(l)) {
      genreErr.innerHTML += "Movie length must be a number!<br />";
    } else {
      check++;
      return l;
    }
  }
  function checkGenre(g) {
    g = genre.value;
    if (genre.value !== "") {
      check++;
      return g;
    } else {
      genreErr.innerHTML += "Select Movie genre!<br />";
    }
  }

  if (check === 3) {
    var movie = new Movie(movieT, movieL, movieG);
    return movie;
  } else {
    createMovie();
  }
}

genreBtn.addEventListener("click", function () {
  var movie;
  var index;
  genreErr.textContent = "";
  movie = createMovie(movieTitle, movieLength, movieGenre);
  movieInfo.innerHTML += "<p>" + movie.getData() + "</p>";
  festival.addMovie(movie);
  index = festival.movieList.length - 1;
  movieSelect.innerHTML += `<option value=${index}>${festival.movieList[
    index
  ].getData()}</option>`;

  movieTitle.value = "";
  movieLength.value = "";
  movieGenre.value = "";
});

function createProgram(date) {
  function checkDate(date) {
    var d;
    var programDate = new Date(date);
    if (programDate.getTime() >= Date.now()) {
      d = programDate;
      return d;
    } else {
      programErr.innerHTML +=
        "Please select valid date! Date must be in present, or future!<br />";
    }
  }
  var dateP = checkDate(date);
  var program = new Program(dateP);
  return program;
}

btnProgram.addEventListener("click", function () {
  programErr.textContent = "";
  if (date.value !== "") {
    var program = createProgram(date.value);
    festival.addProgram(program);
    index = festival.programList.length - 1;
    programSelect.innerHTML += `<option value=${index}>${festival.programList[
      index
    ].getData()}</option>`;
    programInfo.innerHTML = "";
    festival.programList.forEach((element) => {
      programInfo.innerHTML += `<p>${element.getData()}</p>`;
    });
    date.value = "";
  } else {
    programErr.innerHTML +=
      "Please select valid date! Date must be in present, or future!<br />";
  }
});

movieBtn.addEventListener("click", function () {
  movieErr.innerHTML = "";
  var movieIndex = movieSelect.value;
  var programIndex = programSelect.value;
  var movie = festival.movieList[movieIndex];
  var program = festival.programList[programIndex];
  if (movie && program) {
    program.addMovie(movie);
    programInfo.innerHTML = "";
    programSelect.innerHTML = `<option value="">-</option>`;
    festival.programList.forEach((element, index) => {
      programSelect.innerHTML += `<option value=${index}>${element.getData()}</option>`;
    });
    festival.programList.forEach((element) => {
      programInfo.innerHTML += `<p>${element.getData()}</p>`;
    });
  } else if (movie !== "" || program !== "") {
    movieErr.innerHTML = "Please select movie and program!";
  }

  movieSelect.value = "";
  programSelect.value = "";
});
