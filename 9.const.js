// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5; // 상수는 항상 대문자, 단어와 단어사이에는 _ 사용하자

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {}; ❌
console.log(apple);
apple.name = 'green apple';
apple.color = 'green';
apple.display = '🍏';
console.log(apple);
// 객체의 내용 수정은 "변수이름이 가르키는 메모리셀의 주소"는 변경되지 않고 "heap의 메모리주소"의 값을 변경하는거기 때문에 객체의 수정은 가능하다.

// const는 "변수이름이 가르키는 메모리셀"의 재할당이 불가능하다는 것이다.
