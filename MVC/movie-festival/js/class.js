class Movie {
  constructor(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.acrGenre =
      genre[0].toUpperCase() + genre[genre.length - 1].toUpperCase();
  }
  getData() {
    return this.title + ", " + this.length + "min, " + this.acrGenre;
  }
}
class Program {
  constructor(date) {
    this.date = new Date(date);
    this.movieList = [];
  }
  addMovie(movie) {
    this.movieList.push(movie);
  }
  programLength() {
    var programLength = 0;
    this.movieList.forEach((element) => {
      programLength += element.length;
    });
    return programLength;
  }
  sumMovies() {
    return this.movieList.length;
  }
  programDate() {
    return (
      "" +
      this.date.getDate() +
      "." +
      (this.date.getMonth() + 1) +
      "." +
      this.date.getFullYear() +
      "."
    );
  }
  getData() {
    if (this.programLength() === 0) {
      return this.programDate() + " program to be announced!";
    } else {
      return (
        "" +
        this.programDate() +
        " " +
        this.sumMovies() +
        " movies, " +
        this.programLength() +
        " minutes"
      );
    }
  }
}

class Festival {
  constructor() {
    this.movieList = [];
    this.programList = [];
  }
  addMovie(movie) {
    this.movieList.push(movie);
  }
  addProgram(program) {
    this.programList.push(program);
  }
}
