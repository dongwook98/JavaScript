// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result); // 3

function justprint(text) {
  console.log(text); // hello
} // 아무것도 반환하지 않는 함수라면 return 생략가능 -> return이 생략되면 자동으로 return undefined 라고 처리함 by 자바스크립트엔진
const outcome = justprint('hello'); // const outcome = print('문자열'); // print 함수를 호출하고 반환된 값을 할당
console.log(outcome); // undefined

// 숫자가 0 미만 이라면 출력하지않는함수
// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용 예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function conditionalPrint(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
conditionalPrint(-12); // 출력안됨
conditionalPrint(12); // 출력됨

//내가 만든 시험 패스 여부 처리함수 - 패스되면 print 됨
function passTest(score) {
  if (score < 60) {
    return; // 조건에 따라 함수 종료.
  }
  console.log(score);
}
passTest(60); // 출력됨
passTest(50); // 출력 안됨
passTest(85); // 출력됨

/** ✨ const result = print;   // print 함수를 가리키고 있는 참조값, 함수자체를 할당
 *  ✨ const result = print('문자열'); // print 함수를 호출하고 반환된 값을 할당
 */
