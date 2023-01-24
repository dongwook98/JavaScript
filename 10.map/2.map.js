// MDN Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Map 은 [키, 값]으로 이루어진 자료구조
// 순서 ❌ , 유일한 키를 사용해야함, 키만 다르다면 중복 가능
// 자바스크립트에서는 Map은 object와 유사하다.
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 사이즈 확인
console.log(map.size); // 2

// 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false

// 순회
map.forEach((value, key) => console.log(key, value)); // key1 🍎\nkey2 🍌
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

// 찾기
console.log(map.get('key1')); // 🍎
console.log(map.get('key2')); // 🍌
console.log(map.get('key4')); // undefined

// 추가
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 전부삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 10, description: '맛있는우유' } }
const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) {  { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는우유' } }
console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는우유' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는우유' }
// 오브젝트와 맵은 매우 유사하지만,
// 큰 차이점은 사용할 수 있는 함수(메서드)가 다르고, 참조 방법이 다름.
