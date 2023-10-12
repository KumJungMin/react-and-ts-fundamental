// 22. 배열에 타입을 지정하는 방법

const activeUsers: [] = []; // 이렇게 타입을 지정하면 어떤한 요소도 넣을 수 없다.
activeUsers.push('Max');    // error

// 이렇게 타입을 지정하면 문자열만 넣을 수 있다.
const activeUsers2: string[] = []; 
activeUsers2.push('Max');    // ok
activeUsers2.push(123);      // error

// 23-1. Array<타입> 방식으로 타입을 지정할 수도 있다.
const bools1: Array<boolean> = [];
const bools2: boolean[] = [];

// 23-2. 커스텀 타입을 배열의 타입으로 지정할 수도 있다.
// type Point = {
//   x: number,
//   y: number,
// }
const coords: Point[] = [];
coords.push({ x: 0, y: 0 }); // ok
