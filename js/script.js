const  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};
let i = 1;
while(i<=2){
let filmName = prompt('Один из последних просмотренных фильмов?');
let pris = prompt('Насколько оцените его?');
personalMovieDB.movies[filmName] = pris;
i++;
}
console.log(personalMovieDB);