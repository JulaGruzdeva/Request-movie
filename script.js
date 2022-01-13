'use strict';

let numberOfFilms;



function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?: ');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?: ');   
    }
}
start()

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);



function writeYourGenres(){
    for(let i = 1; i<=3; i++){
        const personGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(personGenres)
        
    }
}
writeYourGenres();

function rememberMyFilms(){
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

}
// rememberMyFilms()

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count > 30){
        console.log('Вы киноман');
    }else console.log('error');
    
    console.log(personalMovieDB);

}
// detectPersonalLevel()

