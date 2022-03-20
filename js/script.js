const  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");



const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};


if (personalMovieDB.count < 10)
{
alert('Просмотрено довольно мало фильмов!');
}else if (personalMovieDB.count > 9 && personalMovieDB.count < 31){
   alert('Вы классический зритель');
} else if (personalMovieDB.count > 30 )
{

    alert('Вы Киноман!');

} else {
    alert('Произошла ошибка');
}
for(let i = 0;i < 2; i++)
{
let filmName = prompt('Один из последних просмотренных фильмов?');
let pris = prompt('Насколько оцените его?');
if (filmName != "" && pris != "" && filmName != null && pris != null && filmName.length < 50 )  
{
    personalMovieDB.movies[filmName] = pris;
     
} else{ 
i--;
}
}

console.log(personalMovieDB);