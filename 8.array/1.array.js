// 배열 생성 방법

// 1️⃣ Array 클래스 사용
let array = new Array(2); // 생성자 함수의 전달인자가 1개이면 배열의 사이즈를 지정 할 수 있다.
console.log(array); // [ <2 empty items> ]
array = new Array(1, 2, 3);
console.log(array); // [ 1, 2, 3 ]

// 2️⃣ static 함수 사용해서 배열 생성
array = Array.of(1, 2, 3, 4, 5);
console.log(array);

// 3️⃣ 배열 리터럴 [] 사용
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

// 4️⃣ Array.from() static 함수는 매개변수에 순회가 가능한(iterable) 것을 전달해야함
array = Array.from(anotherArray); // 기존 배열로 부터 새로운 배열을 만들 수 있다.
console.log(array);

// ✨ 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections) ✨
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array); // object에 인덱스키와 length키만 있으면 배열을 만들수있음
