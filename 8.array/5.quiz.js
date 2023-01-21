// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replace2(array) {
  const replaced2 = Array.from(array);
  for (let i = 0; i < replaced2.length; i++) {
    if (replaced2[i] === '🍓') {
      replaced2[i] = '🥝';
    }
  }
  return replaced2;
}
const array2 = ['🍌', '🍓', '🍇', '🍓'];
const result2 = replace2(array2);
console.log(result2);

// 풀이
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

let count = 0;
function counter(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  return count;
}
console.log(counter(['🍌', '🥝', '🍇', '🥝'], '🥝')); // 2

// 풀이
function count2(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) counter++;
  }
  return counter;
}
console.log(count2(['🍌', '🥝', '🍇', '🥝'], '🥝')); // 2

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

let arr3 = [];
function equal(arr1, arr2) {
  for (let arr1Ix = 0; arr1Ix < arr1.length; arr1Ix++) {
    for (let arr2Ix = 0; arr2Ix < arr2.length; arr2Ix++) {
      if (arr1[arr1Ix] === arr2[arr2Ix]) {
        // 같은것을 새로운 배열에 추가해줘야함
        arr3.push(arr1[arr1Ix]);
      }
    }
  }
  return arr3;
}
console.log(equal(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓'])); // [ '🍌', '🍇' ]

//풀이

function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓'])); // [ '🍌', '🍇' ]
