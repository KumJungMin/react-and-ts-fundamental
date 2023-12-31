// 숫자, 문자가 가능한 배열
// 단, 요소의 순서와 가능한 타입 개수가 정해져 있지 않음ㅠㅠ 
const stuff: (string | number)[] = [1, 2, 'a', 'b', 'c', 3];

// 29. 튜플은 길이와 타입의 순서가 고정!
// 숫자 타입 다음에 문자 타입이 오게 정의 가능
const stuff2: [number, string] = [1, 'a'];  // ok
const stuff3: [number, string] = ['a', 1];  // error

// 오직 3개의 number타입만 가지도록 정의
const color:[number, number, number] = [255, 255, 255]; // ok
const color2:[number, number, number] = [255, 255]; // error


// 29-2. [한계] 튜플은 값을 추가하거나 제거해도 별도의 에러가 발생하지 않음!!
type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, 'OK'];
const responses: HTTPResponse[] = [
    [200, 'OK'],
    [404, 'Not Found'],
    [500, 'Internal Server Error'],
];

goodResponse.push(404); // ok;;;
goodResponse.pop(); // ok;;;
