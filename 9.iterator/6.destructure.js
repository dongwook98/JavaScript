// 구조 분해 할당 Destructuring Assignment
// MDN Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다

// 배열 - 변수에 배열사용
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits; // 구조분해할당을 이용하면 배열을 의미있게 전달가능.
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quizㅋㅋㅋㅋ

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
  //   console.log(styles); // 변수가 아니기때문에 에러가 남
}
changeColor(prop);
