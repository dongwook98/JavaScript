function add(a, b) {
  return a + b;
}
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));

console.log(add === sum); // true // add와 sum의 메모리 주소는 같다.

/** ✨ const result = print;   // print 함수를 가리키고 있는 참조값, 함수자체를 할당
 *  ✨ const result = print('문자열'); // print 함수를 호출하고 반환된 값을 할당
 */
