/** 복합 데이터인 객체(object)
 * 객체는 연관있는데이터(number,string,boolean등등)들을 함께 묶어서 보관할 수 있는 큰 object
 * 여러가지 데이터들을 묶어서 표현하는 상태 뿐만 아니라 행동(함수)을 묶을 수 있다.
 * { key: value(원시,객체)}
 *
 * 원시타입의 메모리 보관법 - 원시타입(단일데이터)은 변수에 값을 할당하면 메모리셀에 값 자체가 들어가고, 변수는 값이 들어있는 메모리셀의 주소를 가르킨다. 즉 메모리주소가 가르키는 곳에 값이 들어있다.
 * 객체타입의 메모리 보관법 - 객체타입(복합데이터)은 복합 데이터이기 때문에 데이터가 클수도있고 작을수도 있다. 그래서 크기가 동적으로 변할 수 있는 스페셜한 보관함인 heap에 저장된다.
 * 이 heap은 메모리셀 여러개에 걸쳐서 실제 오브젝트부분이 할당이 된다.
 * 객체를 선언하고 할당을 하면 실제 오브젝트부분은 바로 heap 어딘가에 할당이되고 할당이 되어진다면 heap의 메모리주소가 있고,
 * 이 heap의 메모리 주소가 보관된 메모리의 주소를 가르키는게 변수이름이다.
 * */

let name = 'apple';
let color = 'red';
let display = '🍎';
let orangeName = 'orange';

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊',
};
console.log(orange);
