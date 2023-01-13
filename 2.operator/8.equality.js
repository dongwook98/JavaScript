// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true
console.log(2 === '2'); // ✨ false -> 타입이 다르므로 false
console.log(true == 1); // true
console.log(true === 1); // false -> 타입이 다르므로 false
console.log(false == 0); // true
console.log(false === 0); // false -> 타입이 다르므로 false

const obj1 = {
  // 예를들어 메모리주소: 0X111
  name: 'js',
};
const obj2 = {
  // 예를들어 메모리주소: 0X112
  name: 'js',
};

console.clear();
console.log(obj1 == obj2); // false -> 서로 다른 메모리주소를 가지므로 false
console.log(obj1 === obj2); // false -> 서로 다른 메모리주소를 가지므로 false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // obj3 과 obj2 는 동일한 메모리주소를 갖고있음
console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true

console.log(true == !!3); // true
console.log(true == 3); // false
