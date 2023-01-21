// 1️⃣ 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 나의 풀이 1
function change(arr) {
  return arr.map((value) => {
    if (value === '🍓') {
      return (value = '🥝'); // 리턴을 안해주면 undefined
    } else {
      return value;
    }
  });
}
const fruits = ['🍌', '🍓', '🍇', '🍓'];
console.log(change(fruits)); // [ '🍌', '🥝', '🍇', '🥝' ]

// 나의 풀이 2 👍 (from, to 사용)
function change2(arr, from, to) {
  return arr.map((value) => {
    if (value === from) {
      return (value = to); // 리턴을 안해주면 undefined
    } else {
      return value;
    }
  });
}
console.log(change2(fruits, '🍓', '🥥')); // [ '🍌', '🥥', '🍇', '🥥' ]

// ✨ 풀이
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
console.log(replace(fruits, '🍓', '🥥')); // [ '🍌', '🥥', '🍇', '🥥' ]

// 2️⃣ 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 나의 풀이 1 👍👍👍
function count(arr, word) {
  return arr.filter((item) => item === word).length;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝')); // 2

// ✨ 풀이
function count(array, item) {
  return array.reduce((count, value) => {
    if (value === item) {
      count++;
    }
    return count;
  }, 0);
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝')); // 2

// ✨✨✨ 더 좋은 풀이!!
function count(array, item) {
  return array.filter((value) => value === item).length;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝')); // 2

// 3️⃣ 퀴즈 3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// ✨ 풀이
function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓'])); // [ '🍌', '🍇' ]

// 4️⃣ 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
// 1. 5초과인 숫자들의 배열로 필터링
// 2. 필터링한 배열들의 총합을 배열의 개수로 나누기

const nums = [3, 16, 5, 25, 4, 34, 21];

// 나의 풀이 👍
function avrage(arr) {
  const filteringArr = arr.filter((item) => item > 5);
  const sum = filteringArr.reduce((sum, value) => (sum = sum + value), 0);
  return sum / filteringArr.length;
}
console.log(avrage(nums)); // 24

// ✨ 풀이
const result2 = nums //
  .filter((num) => num > 5) // [16, 25, 34, 21];
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2); // 24

const result3 = nums //
  .filter((value) => value > 5)
  .reduce((avg, value, _, array) => avg + value / array.length, 0);
