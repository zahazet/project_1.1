const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
  count: personalMovieDB,
  movies: {},
  actors:  {},
  genres: [],
  privat: false
};

const a = prompt('Один з останніх фільмів які ви подивились?', ''),
      b = prompt('Оцініть цей фільм', ''),
      c = prompt('Один з останніх фільмів які ви подивились?', ''),
      d = prompt('Оцініть цей фільм', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);