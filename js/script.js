'use strict';
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
    
        }
    },
    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {
            let filmName = prompt('Один из последних просмотренных фильмов?');
            let pris = prompt('Насколько оцените его?');
            if (filmName != "" && pris != "" && filmName != null && pris != null && filmName.length < 50) {
                personalMovieDB.movies[filmName] = pris;
    
            } else {
                i--;
            }
        }
    
    },
    detectPersonalLevl: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
            alert('Вы классический зритель');
    
        } else if (personalMovieDB.count > 30) {
            alert('Вы Киноман!');
    
        } else {
            alert('Произошла ошибка');
        }
    
    },
    
    showMyDB: function (hidden) {
    if (!hedden) {
        console.log(personalMovieDB);
    }

},
    toggleVisiblMyDB: function () {
        if (personalMovieDB.privat){

            personalMovieDB.privat = false;

        } else {
            personalMovieDB.privat = true;

        }


    },
writleYourGenres: function () {

    for (let i = 1; i < 2; i++) {


        let gener = prompt(`Ваши любимые жанры через запятую!`).toLowerCase();

        if(gener ==='' || gener == null) {
            console.lot('Вы ввели некоректные данные или не ввели ничего');
            i--;
        } else{
        personalMovieDB.genres = gener.split(',');
        personalMovieDB.genres.sort();
    }

    }
    personalMovieDB.genres.forEach((item, i)=> {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);

    });
}
};