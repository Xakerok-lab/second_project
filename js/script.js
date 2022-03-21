let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }


}


function writleYourGenres() {


    for (let i = 1; i <= 3; i++) {
        let qwest = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = qwest;


    }
}

writleYourGenres();



function detectPersonalLevl() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
        alert('Вы классический зритель');

    } else if (personalMovieDB.count > 30) {
        alert('Вы Киноман!');

    } else {
        alert('Произошла ошибка');
    }

}
detectPersonalLevl();

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let filmName = prompt('Один из последних просмотренных фильмов?');
        let pris = prompt('Насколько оцените его?');
        if (filmName != "" && pris != "" && filmName != null && pris != null && filmName.length < 50) {
            personalMovieDB.movies[filmName] = pris;

        } else {
            i--;
        }
    }

}

rememberMyFilms();



console.log(personalMovieDB);