let movieTitle = document.querySelector("#title");
let movieLength = document.querySelector("#lenght");
let movieGenre = document.querySelector("#genre");
let date = document.querySelector("#date");
let genreBtn = document.querySelector("#genre-select-btn");
let genreErr = document.querySelector("#genre-err");
let movieInfo = document.querySelector("#movie-info");
let movieErr = document.querySelector("#movie-err");
let programInfo = document.querySelector("#program-info");
let programErr = document.querySelector("#program-err");
let programSelect = document.querySelector("#program-select");
let programListInfo = document.querySelector(".program-list");
let movieList = document.querySelector("#movie-list");
let movieSelect = document.querySelector("#movie-select");
let btnProgram = document.querySelector("#program-select-btn");
let movieBtn = document.querySelector("#add-movie-btn");
let movieCounter = 0; // varijabla za inicijalizaciju tabele koja služi za prikaz napravljenih filmova
let programCheck = 0; // inkrementira se ukoliko nastane program sa duplim datumom, ne dozvoljava dodavanje istog u listu programa!

/* deklarišemo i inicijalizujemo objekat festival jer su u nama nizovi koji čuvaju podatke o filmovima i programima*/
let festival = new Festival();

function createMovie(title, length, genre) {
  let check = 0; //error check-er, ukoliko nije odgovarajuće vrednosti, neka f-ja se neće izvršiti
  let movieT = checkTitle(title);
  let movieL = checkLength(length);
  let movieG = checkGenre(genre);

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
  }
}

genreBtn.addEventListener("click", function () {
  let movie;
  let index;
  genreErr.textContent = "";
  movie = createMovie(movieTitle, movieLength, movieGenre);
  if (movie) {
    if (movieCounter === 0) {
      movieInfo.innerHTML = `<table class="movie-list">
    <thead>
      <th>Movie title</t>
      <th>Lenght</t>
      <th>Genre</t>
    </thead>
    <tbody class="movie-list-body">
    </tbody>
    </table>`;
    }
    let movieListBody = document.querySelector(".movie-list-body");
    movieListBody.innerHTML += `
  <tr>
    <td>${movie.title}</t>
    <td>${movie.length} min</t>
    <td>${movie.acrGenre}</t>
  </tr>`;
    festival.addMovie(movie);
    index = festival.movieList.length - 1;
    movieSelect.innerHTML += `<option value=${index}>${festival.movieList[
      index
    ].getData()}</option>`;

    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "";
    movieCounter++;
  }
});

function createProgram(date) {
  function checkDate(date) {
    let d;
    let programDate = new Date(date);
    if (programDate.getTime() >= Date.now()) {
      d = programDate;
      // funkcija koja proverava da li se prosleđeni datum preklapa sa datumom iz naše liste programa
      function checkDuplicate() {
        datesArr = [];
        festival.programList.forEach((element) => {
          datesArr.push(element.date);
        });
        function filterByDate(date) {
          if (date.getTime() === programDate.getTime()) {
            return date;
          }
        }
        datesArrChecked = datesArr.filter(filterByDate);
        return datesArrChecked;
      }
      if (checkDuplicate().length === 0) {
        return d;
      } else {
        ++programCheck;
      }
    } else {
      return false;
    }
  }
  if (checkDate(date)) {
    let dateP = checkDate(date);
    const program = new Program(dateP);
    return program;
  }
}

btnProgram.addEventListener("click", function () {
  let program;
  let programVal;
  let programOption;
  let infoProgramIndex; //broj objekata sa manjim ključem od trenutno nastalog objekta (ključ je vreme u milisekundama)
  programErr.textContent = "";
  program = createProgram(date.value);
  if (date.value !== "" && programCheck === 0 && program !== undefined) {
    festival.addProgram(program);
    index = program.date.getTime(); // index nam služi za poređenje, s obzirom da su datumi jedinstveni, uzimamo vrednost datuma u milisekundama
    //logika za vraćanje objekta iz niza, po filter metodi koja uzima objekat sa poznatom vrednošću svojstva tog objekta!
    programVal = festival.sortProgram().filter((obj) => {
      return obj.key === index;
    });
    //logika za hronološko ubacivanje elemenata sortiranog niza u DOM
    arrInfoIndex = festival.sortProgram().filter((obj) => {
      return obj.key < index;
    });
    infoProgramIndex = arrInfoIndex.length;
    //
    //dodavanje programa u selekt polje - u sekciji Add movie to program
    programOption = document.createElement("option");
    programOption.setAttribute("value", index);
    programOption.textContent = `${programVal[0].getData()}`;
    programSelect.insertBefore(
      programOption,
      programSelect.children[infoProgramIndex]
    );
    //dodavanje podataka o programu - unutar sekcije Program
    programListItem = document.createElement("li");
    programListItem.setAttribute("data-key", index);
    programListItem.textContent = `${programVal[0].getData()}`;
    programListInfo.insertBefore(
      programListItem,
      programListInfo.children[infoProgramIndex]
    );
    date.value = "";
  } else {
    programErr.innerHTML +=
      "Please select valid date! Date must be in present, or future! No duplicate dates allowed!<br />";
  }
  programCheck = 0;
});

movieBtn.addEventListener("click", function () {
  movieErr.innerHTML = "";
  let programVal;
  let movieIndex = movieSelect.value; // varijabla koja će nam služiti za biranje filma iz liste filmova
  let programIndex = programSelect.value; // varijabla koja će nam služiti za biranje programa iz liste programa
  let movie = festival.movieList[movieIndex];
  // izvlačimo naš objekat na osnovu filter funkcije i poznate vrednosti KEY svojstva za dati objekat (dobijene preko selekt polja)
  programVal = festival.sortProgram().filter((obj) => {
    return obj.key == programIndex;
  });
  let program = programVal[0];
  if (movie && program) {
    program.addMovie(movie);
    let programOption = document.querySelector(
      `li[data-key="${programIndex}"]`
    );
    programOption.textContent = `${program.getData()}`;
    document.querySelector(
      `option[value="${programIndex}"]`
    ).textContent = `${programVal[0].getData()}`;
  } else if (movie !== "" || program !== "") {
    movieErr.innerHTML = "Please select movie and program!";
  }

  movieSelect.value = "";
  programSelect.value = "";
});
