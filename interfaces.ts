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

// readonly로 읽기 전용 프로퍼티를 정의한다.
interface Person2 {
  name: string;
  readonly age: number;
}
const person4: Person2 = { name: 'Jane', age: 22 }; // ok
person4.age++; // error


// interface에서 함수를 정의하는 방법

interface Person3 {
  name: string;
  readonly age: number;
  // sayHi: () => string;
  sayHi(): string;
}
const person5: Person3 = {
  name: 'Jane',
  age: 22,
  sayHi: () => 'Hello',
};

// interface에서 함수의 인자를 정의할 수 있음

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}
const shoes: Product = {
  name: 'Shoes',
  price: 10000,
  applyDiscount(discount: number) { // error: number타입의 값을 리턴하지 않아서!
    // return this.price * ((100 - discount) / 100);
  },
};