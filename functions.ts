// 8-1. 함수 인자에 타입을 정의하지 않으면 any 타입이 되므로, ts 에러가 발생하지 않는다.
function square_1(x) {
    return x * x;
}

square_1(2); // 4
square_1('z'); // 'zz'


// 8-2. 함수 인자에는 타입을 정의하는 것이 좋다.
function square_2(x:number) {
    return x * x;
}
square_2(2); // 4
square_2('z'); // error


// 9. 함수의 인자 개수가 맞지 않으면 ts 에러가 발생한다.
const doSomething= (person:string, age:number, isFunny:boolean) => {}

doSomething("ChickenFace", 100, 123); // error
doSomething("ChickenFace"); // 인수 개수 error


// 10. 함수 인자의 기본값은 인자:타입 = 기본값 형태로 정의한다.
function greet(person:string = 'stranger') {
  return `Hello ${person}`;
}
greet(); // 'Hello stranger'

// 11. 함수의 반환값의 타입을 추론할 수 있다
//  인자의 타입이 Number이므로, 반환값의 타입도 Number으로 추론함
// ts는 인자값의 타입을 토대로 리턴 타입을 추론하므로 복잡한 함수의 경우 반환값의 타입을 명시하는 것이 좋다.
function square_3(x:number) {  
  // 리턴값의 타입을 명시하지 않아도, ts가 number로 추론함
    return x * x;
}

// 12. 익명함수의 경우, ts가 컨텍스트를 통해 타입을 추론한다
const colors = ['red', 'green', 'blue'];
colors.map((color) => {});  // color 인자의 타입을 명시하지 않아도, ts가 string으로 추론함 


// 13. void는 주로 함수에서 아무것도 반환하지 않을 때 사용한다.
function logMessage(message:string) { 
  // return이 없으므로, void 타입이지만, 타입을 명시해주는 게 좋다.
  console.log(message);
}

// 14. never는 함수에서 항상 예외가 발생하거나, 절대 반환하지 않을 때 사용한다.
// void는 undefined를 반환할 수 있지만, never는 절!대! 반환할 수 없다.
function throwError1(message:string): never {
  throw new Error(message);
}
function throwError2(message:string): never {
  return error(message); // error 발생
}
function gameLoop1(): never {
  while(true) {
    // do something
  }
}
function gameLoop2(): never {
  while(true) {
    return 1; // error 발생
  }
}