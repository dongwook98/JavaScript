// 연산자 우선순위
// MDN 연산자 우선순위: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
let a = 2;
let b = 3;
let result = ((a + b) * 4) / 5;
console.log(result); // 4
result = a++ + b * 4; // a++ 는 문장이 끝나고 실행..
console.log(result); // 14
console.log(a); // 3
