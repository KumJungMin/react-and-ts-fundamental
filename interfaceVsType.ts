// 1. interface은 선언 후에 속성 타입을 추가할 수 있지만, type은 불가능
interface Dog {
  name: string;
}
interface Dog {
  birth: number;
}

const dog: Dog = { name: 'Jane', birth: 1992 }; // ok



// 2. 상속을 통해 interface를 확장할 수 있지만, type은 불가능
interface ServiceDog extends Dog {
  job: 'drug sniffing' | 'bomb sniffing' | 'rescue' | 'therapy';
}


// 3. 쉼표(,)를 사용해 다중상속으로 interface를 확장할 수 있음
interface Person {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string; 
}
interface Engineer extends Person, Employee {
  favoriteLanguage: string;
}

const tony: Engineer = {
  name: 'Tony',
  id: 1,
  email: '',
  favoriteLanguage: 'TypeScript',
};
