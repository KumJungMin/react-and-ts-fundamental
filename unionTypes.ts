// 25-1. 유니온 타입(type1 | type2)은 여러 타입 중 하나일 수 있는 값을 의미한다.
let age:number | string = 27;
age = '27';

// 25-2. 유니온 타입은 커스텀 타입과도 함께 사용할 수 있다.
type Point = {
  x: number,
  y: number,
}
type Loc = {
  lat: number,
  long: number,
}
let coordinates: Point | Loc = { x: 10, y: 20 }; // 하나의 타입에 해당하면 가능
coordinates = { lat: 10, long: 20 }; // 하나의 타입에 해당하면 가능
coordinates = { x: 10, y: 20, lat: 10, long: 20 }; // 두 개의 타입에 해당하면 가능
coordinates =  {x: 10, lat: 20 }; // 그러나, 두 개의 타입에 해당하지 않으면 에러


// 26-1. 함수 인자에 유니온 타입을 사용할 수 있다.
function printAge(age: number | string): void {
  console.log(`Age: ${age}`);
}
printAge(27); // ok
printAge('27'); // ok

// 26-2. 함수 연산에 특정 타입에서만 유효한 연산을 실행할 시 ts 에러 발생
// -> 이 경우 type narrowing(타입 좁히기)을 사용하여 해결할 수 있다.
function calculateText1(price: number | string, tax: number) {
  return price * tax; // error
}

// 26-3. type narrowing은 if문을 사용하여 특정 타입에서만 연산을 실행하도록 한다.
function calculateText2(price: number | string, tax: number) {
  if (typeof price === 'number') return price * tax; 
  else price.replace('$', '')
}

// 27. 여러 타입을 가지는 배열을 정의하는 법 "(타입1 | 타입2)[]"" 형식
const stuff1: (number | string)[] = [1,2,3,'hello'];

// 이렇게 정의하면 두 개의 타입을 요소로 가지는 배열이 아니라,
// 숫자 배열 혹은 문자열 배열 중 하나만 가지는 배열이 된다.
const stuff2: number[] | string[] = [1,2,3,'hello']; 

const coords3: (Point|Loc)[] = [];
coords3.push({ x: 0, y: 0 }); // ok
coords3.push({ lat: 0, long: 0 }); // ok
coords3.push({ x: 0, y: 0, lat: 0, long: 0 }); // ok
coords3.push({ x: 0, long: 0 }); // error
