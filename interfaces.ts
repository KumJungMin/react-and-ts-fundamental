// 인터페이스는 객체 타입을 정의한다.
interface Point {
  x: number;
  y: number;
}
const pt: Point = { x: 0, y: 0 }; // ok
const pt2: Point = { x: 0 }; // error
const pt3: Point = {}; // error


// 인터페이스는 ?로 선택적 프로퍼티를 정의한다.
interface Person {
  name: string;
  age?: number;
}
const person: Person = { name: 'Jane' }; // ok
const person2: Person = { name: 'Jane', age: 22 }; // ok
const person3: Person = {}; // error