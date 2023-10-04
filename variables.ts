// 1. declare a string type variable
let movieTitle: string = 'Interstellar';
movieTitle = 'Interstellar2';

movieTitle = 123; // error
movieTitle.toUpperCase(); // ok
movieTitle.toUpper(); // error


// 2. declare a number type variable
let numCatLives: number = 9;
numCatLives += 1; // ok
numCatLives = '9'; // error


// 3. declare a boolean type variable
let isDone: boolean = false;
isDone = true; // ok
isDone = 1; // error


// Type inference
// ts에서는 변수의 타입을 명시하지 않아도, 변수의 초기화 값에 따라 타입을 추론한다.
let tvShowTitle = 'Game of Thrones'; 
tvShowTitle = 'Game of Thrones2'; // ok
tvShowTitle = 123; // error

let isFunny = true;
isFunny = false; // ok
isFunny = 'true'; // error