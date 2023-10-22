// 인터페이스는 객체 타입을 정의한다.
interface Point {
  x: number;
  y: number;
}
const pt: Point = { x: 0, y: 0 }; // ok
const pt2: Point = { x: 0 }; // error
const pt3: Point = {}; // error