"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };
// obj.a = 2;
// console.log(obj);

// // snake_case
// // UPPER_SNAKE_CASE
// // cammleCase
// // Kebab-case
// // PascalCase

// const persone = "Alex";
// const bool = true;

// const obj = {
//     name: "Igor",
//     age: 20,
//     isMarried: false
// };

// console.log(obj.name);

// let arr = [
//     'plum.png',
//     'orangr.jpg',
//     'apple.bmp',
//     6,
//     {
//         age: 80
//     },
//     'Igor'
// ];

// console.log(arr[5]);


// const arr = [1, 2, 3];

// arr[10] = '3456';

// console.log(arr);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const obj = {
//     Anna: 500,
//     Alice: 800
// };

// console.log(obj.Anna);


// const d = 'd';
// const arrObj = {
//     a: "a",
//     b: "b",
//     c: "c",
//     abc: {
//         def: {

//         }
//     }
// };

// arrObj.d = '1234';
// arrObj[d] = '1234';
// console.log(arrObj['d']);
// console.log(arrObj.d);


// let storeName = 'MovieStore';
// const storeDescription = {
//     budget: 10000,
//     employees: ['Alex', 'Anna', 'Alice'],
//     products: {
//        ' cartoon': 400,
//         'movie': 900
//     },
//     open: true
// }

// alert('Hello World');

// const result = confirm('Are you here?');
// console.log(result);
// if (result == true) {
//     alert('Hello!');
// } else {
//     alert('Goodbye!');
// }

// const answer = +prompt('Do you have 18?', 'Sure');
// console.log(answer);
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('What is youre name?');
// answers[1] = prompt('What is youre surname?');
// answers[2] = prompt('How old are you?');

// console.log(typeof(answers));



// const category = 'toys';

// console.log(`https://someurl.com.${category}/6`);

// const user = prompt('What is youre name?');
// console.log(user);
// alert(`Hello, ${user}!`);


// let incr = 10, 
//     decr = 10;

// console.log(decr, incr);

// console.log(5%2);


// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
//     personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         geners: [],
//         privat: false
//     };

// let movieFirst = prompt('Один из просмотренный фильмов', ''),
//     movieMarkFirst = +prompt('На сколько вы оцениваете этот фильм?',''),
//     movieSecond = prompt('Один из просмотренный фильмов', ''),
//     movieMarkSecond = +prompt('На сколько вы оцениваете этот фильм?','')

// personalMovieDB.movies[movieFirst] = movieMarkFirst;
// personalMovieDB.movies[movieSecond] = movieMarkSecond;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// };


// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 3; i++) {  
//     console.log(`Это I ${i}`);
//     for (let j = 1; j < 3; j++) {  
//         console.log(`Это J ${j}`);
//     }
// }

// let result = '';

// const length = 6;

// for (let i = 1; i <= length; i++) {

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += "\n";
//     console.log(result);
// }

// console.log(result);

//  point: for (let i = 0; i < 4; i++) {
//     console.log(`Tier 1: ${i}`);

//     for (let j = 0; j < 4; j++) {
//         console.log(`Tier 2: ${j}`);

//         for (let k = 0; k < 4; k++) {  
//             if (k === 2) continue point

//             console.log(`Tier 3: ${k}`);
//         }
//     }
// }


// for (let i = 5; i <= 10; i++) {                     //Задача 1
//     console.log(i);
// };


// for (let i = 20; i >= 10; i--) {                    //Задача 2
//     if (i == 13) break;
//     console.log(i);
// };


// for (let i = 2; i <= 10; i++) {                    //Задача 3
//     if (i % 2 == 0) console.log(i);
// };


// let num = 2;                                         //Задача 4

// while (num <= 10) {
//     if (num % 2 == 0) console.log(num);
//     num++;
// };

// let arr = [],                                           //Задача 5
//     num = 5

// for (let i = 0; i <= 5; i++) {
//     arr[i] = num;
//     num++;
// }
// console.log(arr);



// const arr = [3, 5, 8, 16, 20, 23, 50],
//       result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr [i];
// }
// console.log(result);



// let data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] *= 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] += ' - done';
//     }
// };
// console.log(data);



// let data = [5, 10, 'Shopping', 20, 'Homework'],
//       result = [];

// for (let i = 1; i < data.length; i++) {
//     result[i - 1] = data[data.length - i];
// };
// console.log(result);



// const lines = 5;                             //Требует решения
// let result = '';

// for (let i = 0; i < lines; i++) {
    
// }



// const length = 6;                            //Решенный треугольник
// let result = '';

// for (let i = 1; i <= length; i++) {

//     for (let j = 0; j < i; j++){
//         result += "*";
//         console.log(result);
//     }

//     result += "\n";
//     console.log(result);
// }

// console.log(result);


// let length = 6,
//     result = '';

// for (let i = 0; i <= length; i++) {
//     for (let j = 0; j < length - i; j++) {
//         result += ' ';
//     }

//     for (let j = 0; j < i * 2 + 1; j++) {
//         result += '*'
//     }

//     result += "\n";
// };
// console.log(result);









let numberOfFilms,
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        geners: [],
        privat: false
    };

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        if (numberOfFilms < 10) {
            console.log('Мало');
        } else if (numberOfFilms >= 10 && numberOfFilms < 30){
            console.log('Нормально');
        } else if (numberOfFilms >= 30) {
            console.log('Киноман');
        } else {
            console.log('Error');
        }
    } 
}
start();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function moviesCount() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из просмотренный фильмов', ''),
            b = prompt('На сколько вы оцениваете этот фильм?','');
        (a != null && b != null && a != '' && b != '' && a.length < 50) ? personalMovieDB.movies[a] = b : i--;    
    }
}
moviesCount();

function writeYourGeners() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.geners[i] = prompt(`Ваш любимый жанр номер ${i + 1}`);
    }
}

writeYourGeners();