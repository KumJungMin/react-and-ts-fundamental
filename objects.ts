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