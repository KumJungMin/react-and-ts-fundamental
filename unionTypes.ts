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