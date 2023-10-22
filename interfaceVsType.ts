// 1. interface은 선언 후에 속성 타입을 추가할 수 있지만, type은 불가능
interface Dog {
  name: string;
}
interface Dog {
  birth: number;
}

const dog: Dog = { name: 'Jane', birth: 1992 }; // ok