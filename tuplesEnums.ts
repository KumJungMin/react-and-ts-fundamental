// enum은 재사용가능한 상수의 집합으로, 타입이나 값으로 쓸 수 있음
// 대체로 상수임을 표현하기 위해 대문자로 작성

// enum을 문자로 정의하면, 각 값에 숫자가 기본 할당됨
// 숫자를 변경해도, 사용처에서는 값을 참조하므로 문제가 없음
enum OrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED  // 3
} 

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED); // okay
isDelivered('DELIVERED'); // type error