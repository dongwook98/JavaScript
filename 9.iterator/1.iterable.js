// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// "순회 가능한 객체이다" 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread
// 📌 정리!
// 1. Array처럼 객체안에 이터레이션 프로토콜을 따라가는 심볼 이터레이터를 가지고있거나
// 2. 이터레이터를 반환하는 함수들도 for...of, spread 사용가능!!
const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());
for (const item of array.entries()) {
  console.log(item);
} // ✨ 배열은 이터레이션프로토콜을 따른다!!

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // for...in : 객체의 key를 출력
  console.log(item);
} // 🚨 반면, 객체는 배열과 다르게 이터레이션프로토콜을 따르지않는다!! 그러므로 객체는 for...in 사용

const iterator = array.values();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // true // done 이 true 라는 것은 반복 끝.

// iterator 사용해 보기!
const iterator2 = array.values();
while (true) {
  const item = iterator2.next();
  if (item.done) break;
  console.log(item.value);
} // 이터레이터를 정의하고 이터레이터의 넥스트함수를 정의하고
// 넥스트함수의 리턴값은 value, done이라는 속성을 가진 객체이다.
// done은 true가 될때 반복을 중지한다..
