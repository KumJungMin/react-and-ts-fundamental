// 22. 배열에 타입을 지정하는 방법

const activeUsers: [] = []; // 이렇게 타입을 지정하면 어떤한 요소도 넣을 수 없다.
activeUsers.push('Max');    // error

// 이렇게 타입을 지정하면 문자열만 넣을 수 있다.
const activeUsers2: string[] = []; 
activeUsers2.push('Max');    // ok
activeUsers2.push(123);      // error