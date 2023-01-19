console.log(globalThis); // globalThis와 this는 전역을 가르킨다.
console.log(this); // ⚠️ node 에서 this는 현재 모듈에 있는 정보를 출력한다.
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 브라우저는 window 가 전역객체이다. window 안에는 브라우저에서 사용하는 API들이 있다.

eval('const num = 2; console.log(num)'); // 2 // 문자열이지만 자바스크립트코드로 평가됨
// TODO -> why? eval은 node의 API
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43')); // 12.43 // 문자열이긴 하지만 숫자로 변환
console.log(parseInt('12.43')); // 12 // 실수 -> 정수
console.log(parseInt('12')); // 12

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded); // https://%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com

const decoded = decodeURI(encoded);
console.log(decoded); // https://드림코딩.com

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part)); // %EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com

console.log(encodeURI('좋은 강의 감사합니다!'));
