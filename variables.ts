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