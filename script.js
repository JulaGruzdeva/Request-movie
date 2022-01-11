'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?: ');
const latestFilms = prompt('Один из последних просмотренных фильмов?'),
      scoreFilms = prompt('На сколько оцените его?');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

personalMovieDB.movies[latestFilms] = scoreFilms;

console.log(personalMovieDB);
