// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  // 함수도 객체이기 때문에 객체를 다른 변수에 할당하는것은 가능하다.
  return a + b;
};
console.log(add(1, 2)); // 3

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(3, 4)); // 7

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

//✨ 함수자체는 선언문을 할때는 문(statement)이지만 함수는 값으로 계산 될 수 있는 표현식이다.
// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😍');
})(); // 😍 // 함수정의에 ()를 씌우면 값으로 바뀜 호출가능

console.log(
  (function add2(num1, num2) {
    return num1 + num2;
  })(2, 3)
); // 5
