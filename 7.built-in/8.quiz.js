// 퀴즈!
// 1.문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// H
// e
// l
// l
// o
// ..
// !

// 2. 사용자들의 id 를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';

console.log(ids.split(', '));
// ['user1', 'user2', 'user3', 'user4']

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
function perHourPrint() {
  console.log(now.toString());
}

const now = new Date();
setInterval(perHourPrint, 1000);

// 풀이
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-kr'));
}, 1000);
