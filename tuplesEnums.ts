// enum은 재사용가능한 상수의 집합으로, 타입이나 값으로 쓸 수 있음
// 대체로 상수임을 표현하기 위해 대문자로 작성

// enum을 문자로 정의하면, 각 값에 숫자가 기본 할당됨
// 숫자를 변경해도, 사용처에서는 값을 참조하므로 문제가 없음
// enum에서 하나의 값을 지정해주면 그 다음 값부터는 그 값 + 1이 할당됨
enum OrderStatus {
  PENDING = 10, 
  SHIPPED, // 11
  DELIVERED, // 12
  RETURNED  // 13
} 

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED); // okay
isDelivered('DELIVERED'); // type error

// enum에 여러 타입을 지정할 수 도 있으나 대부분 같은 타입의 값을 선언
enum ArrayKeys {
  UP = 'up', 
  DOWN = 'down', 
  LEFT = 'left', 
  RIGHT = 'right',
  ERROR = 404
} 
function move(key: ArrayKeys) {
  // 값을 비교할 때 enum을 쓰면, 값이 아닌 이름으로 비교하므로 오타를 줄일 수 있음
  if (key === ArrayKeys.DOWN) console.log('down');
}