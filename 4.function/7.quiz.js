// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

const print = function (num) {
  return num;
};

const printTwice = function (num) {
  return 2 * num;
};

function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    console.log(action(i)); // 0~max 출력
  }
}

iterate(5, print);
iterate(5, printTwice);

//선생님 풀이
function iterate2(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}
iterate2(3, log);
iterate2(3, doubleAndLog);
iterate2(3, (num) => console.log(num));
iterate2(3, (num) => console.log(num * 2));

//콜백함수 사용예
setTimeout(() => {
  console.log('3초뒤 이 함수가 실행될거예요');
}, 3000);
