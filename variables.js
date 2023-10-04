// tsc 파일명을 하면 js 파일이 생성된다.
// 단, 타입에러가 있어도 js 파일이 생성된다.

// 1. declare a string type variable
var movieTitle = "Interstellar";
movieTitle = "Interstellar2";
movieTitle = 123; // error
movieTitle.toUpperCase(); // ok
movieTitle.toUpper(); // error
// 2. declare a number type variable
var numCatLives = 9;
numCatLives += 1; // ok
numCatLives = "9"; // error
// 3. declare a boolean type variable
var isDone = false;
isDone = true; // ok
isDone = 1; // error
