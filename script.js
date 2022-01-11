'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?: ');




let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i = 0; i<2; i++){
    const latestFilms = prompt('Один из последних просмотренных фильмов?'),
      scoreFilms = prompt('На сколько оцените его?');

    if (latestFilms != null && scoreFilms != null && latestFilms != '' && scoreFilms != '' && latestFilms.length < 50){
        personalMovieDB.movies[latestFilms] = scoreFilms;
        console.log('done');
    } else {
        console.log('error');
        --i
    }
    
}

if (personalMovieDB.count < 10){
    console.log('Просмотренно довольно мало фильмов');
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if(personalMovieDB.count > 30){
    console.log('Вы киноман');
}else console.log('error');

console.log(personalMovieDB);
2