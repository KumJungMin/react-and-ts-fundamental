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


// 4. declare a any type variable
// any type은 모든 타입을 허용한다.
let whatever: any = 'whatever';
whatever = 123; // ok
whatever = true; // ok
whatever = {}; // ok


// 7. 암묵적 any type의 발생
// foundMovie는 변수 초기화값이 없으므로 any type이 된다.
// 이 경우에 foundMovie에 타입을 명시해주는 것이 좋다!(명시적 타입 선언이 필요한 순간)
const movies = ['Interstellar', 'Inception', 'The Dark Knight'];
let foundMovie:string;

for (let movie of movies) {
  if (movie === 'Inception') foundMovie = movie;
}

foundMovie = 1; // error
foundMovie = true; // error
foundMovie = {};  // error

