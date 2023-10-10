// 15. 함수에 객체 형태의 인자에 타입을 정의할 수 있다.
function printName(person: {first: string, last: string}):void {
  console.log(`${person.first} ${person.last}`);
}
printName({first: 2}); // error
printName(dog); // error
printName({first: 'Elton'}); // error
printName({first: 'Elton', last: 'John'}); // ok

// 16-1. 객체를 정의할 때, 타입을 정의할 수 있다.({인자명:타입} 형식)
let coordinate : {x: number, y: number,} = { x: 10, y: 20 }

// 16-2. 함수에서 리턴하는 객체 타입을 정의할 수 있다.
function randomCoordinate(): {x: number, y: number} {
  return { 
    x: Math.random(), 
    y: Math.random() 
  }
}
// 17. 함수에 인자를 넘길 때, 객체 리터럴을 넘기면 인자 개수가 초과된 경우를 에러를 주지만,
//  만약 객체값을 변수에 정의하여 넘기면 인자 개수가 초과되어도 에러를 주지 않는다!!

printName({first: 'Elton', last: 'John', age: 27});  // error

const singer = { first: 'Elton', last: 'John', age: 27 };
printName(singer); // working..? why?


// 18. 타입 별칭: 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수(반복적인 타입 정의를 줄일 수 있음)
// 수정 전
function doubleCoordinate_1(coordinate: {x: number, y: number}): {x: number, y: number} {
  return {
    x: coordinate.x * 2,
    y: coordinate.y * 2,
  }
}
// 수정 후
// type Point = { x: number, y: number };

function doubleCoordinate_2(coordinate: Point): Point {
  return {
    x: coordinate.x * 2,
    y: coordinate.y * 2,
  }
}

// 19. 중첩 객체에서 타입 별칭을 사용하면, 코드를 더 간결하게 작성할 수 있다.
// 수정 전
function calculatePayout_1(song: {
  title: string,
  artist: string,
  streams: number,
  credits: {
    producer: string,
    writer: string,
    arranger: string,
  }
}) {}


// 수정 후
type Song = {
  title: string,
  artist: string,
  streams: number,
  credits: Credits,
}
type Credits = {
  producer: string,
  writer: string,
  arranger: string,
}
function calculatePayout_2(song: Song) {
  console.log(song.credits.arranger);
}
calculatePayout_2({
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  streams: 1500000,
  credits: {
    producer: 'Max Martin',
    writer: 'Abel Tesfaye',
    arranger: 'Tommy Brown',
  }
})

// 20. 선택적 프로퍼티: 객체의 프로퍼티 중 일부만 필수로 정의하고 싶을 때 사용한다.
type Point = {
  x: number,
  y: number,
  z?: number, // z는 선택적 프로퍼티
}
const myPoint: Point = { x: 10, y: 20 }; // ok
const myPoint2: Point = { x: 10, y: 20, z: 30 }; // ok

// 21-1. 읽기 전용 프로퍼티(readonly): 객체의 프로퍼티를 읽기 전용으로 정의하고 싶을 때 사용한다. 
type User = {
  readonly id: number,
  name: string,
}
const user: User = { id: 1234, name: 'Elton' };
user.name = 'John'; // ok
user.id = 4567; // error

// 21-2. 단 객체는 참조하는 것이므로, readonly로 정의해도 객체의 프로퍼티는 수정이 가능하다.
type Animal = {
  readonly natural: Natural,  
  name: string, 
}
type Natural = {
  area: string,
  species: string,
}
const dog : Animal = {
  name: 'dog',
  natural: {
    area: 'land',
    species: 'mammal',
  }
}
dog.natural.area = 'sea'; // 가능!

// 22. intersection 타입(&): 두 개 이상의 타입을 합쳐준다.
type Circle = {
  radius: number,
}
type Colorful = {
  color: string,
}
type ColoredCircle = Circle & Colorful;

const happyFace: ColoredCircle = {
  radius: 42,
  color: 'yellow',
}

type Cat = {
  numberOfLives: number,
}
type Dog = {
  breed: string,
}
// 중괄호를 이용해 타입을 추가로 정의할 수 있음
type CatDog = Cat & Dog & { name: string }; 

const christy: CatDog = {
  numberOfLives: 9,
  breed: 'Persian',
  name: 'Christy',
}