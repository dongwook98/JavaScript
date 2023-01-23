// MDN Spread: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruit1 = ['🍏', '🥝'];
const fruit2 = ['🍓', '🍌'];
let arr = fruit1.concat(fruit2);
console.log(arr);
arr = [...fruit1, '🍇', ...fruit2];
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: '신방동 213123' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(ellie); // 기존 객체 변경 ❌
console.log(updated); // 스프레드연산자로받는 객체 속성에 객체가 있다면 shallow copy가 이루어진다.
