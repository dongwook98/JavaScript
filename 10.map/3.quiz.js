// quiz 1. 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

// 나의 풀이
const set3 = new Set(fruits);
console.log(set3); // Set(4) { '🍌', '🍎', '🍇', '🍑' }

// TODO 풀이 ✨
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits)); // [ '🍌', '🍎', '🍇', '🍑' ]

// quiz 2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// 나의 풀이
const result = new Set();
for (let el of set1) {
  if (set2.has(el)) {
    result.add(el);
  }
}
console.log(result); // Set(3) { 1, 2, 3 }

// 함수 풀이
function findIntersection(set3, set4) {
  const set = new Set();
  for (let el of set1) {
    if (set2.has(el)) {
      set.add(el);
    }
  }
  return set;
}
console.log(findIntersection(set1, set2)); // Set(3) { 1, 2, 3 }

// TODO 풀이 ✨
function findIntersection2(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection2(set1, set2)); // Set(3) { 1, 2, 3 }
