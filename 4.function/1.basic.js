// MDN 함수: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function
// 사용예제 1
function sum(a, b) {
  console.log('function');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(lastName, firstName) {
  return `${firstName} ${lastName} 👋`;
}
let lastName = '강';
let firstName = '동욱';
console.log(fullName(lastName, firstName));

let lastName2 = '김';
let firstName2 = '예리';
console.log(fullName(lastName2, firstName2));
