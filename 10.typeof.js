/**  자바 , C , C++과 같은 다른 프로그래밍 언어들은 컴파일러를 필요로 한다.개발자가 작성한 코드를 컴파일러로 이용해서 실행파일로 변환해야지 실행가능하다.
 * 이런 컴파일러를 가지고 있는 프로그래밍 언어들은 대부분 정적타입이다. 즉, 컴파일할때 코드에 있는 모든 데이터의 타입들이 정적으로 정해진다.
 * 반면에 자바스크립트엔진은 인터프리터이다. 즉, 어플리케이션이 동작할때 동적으로 코드를 한줄한줄씩 번역하여 실행하므로 타입들이 동적으로 다이나믹하게 결정된다.
 */

// typeof: 데이터 타입을 확인
// 특정한 데이터의 값을 타입 문자열로 반환
// 자바스크립트의 타입은 동적으로 결정이 되고 할당된 값에 따라서 타입이 결정된다.
// 자바스크립트의 타입 - dynamic,  weakly typed progamming language

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123456; // 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
