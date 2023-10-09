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