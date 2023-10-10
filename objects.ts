// 15. 함수에 객체 형태의 인자에 타입을 정의할 수 있다.
function printName(person: {first: string, last: string}):void {
  console.log(`${person.first} ${person.last}`);
}
printName({first: 2}); // error
printName(dog); // error
printName({first: 'Elton'}); // error
printName({first: 'Elton', last: 'John'}); // ok