// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const dog = { name: '🐶' };
const cat = { name: '🐈', owner: '동욱' };

if (dog && cat) {
  console.log('둘다 true!');
}

if (dog || cat) {
  console.log('둘다 true!');
}

let result = dog && cat;
console.log(result); // { name: '🐈', owner: '동욱' }

result = dog || cat;
console.log(result); // { name: '🐶' }

// 활용 예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// || 조건이 falshy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없음');
  }
  animal.owner = '바뀐 주인';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있음');
  }
  animal.owner = '새로운 주인';
}

dog.owner && changeOwner(dog);
cat.owner && changeOwner(cat);
console.log(dog);
console.log(cat);

dog.owner || makeNewOwner(dog);
cat.owner || makeNewOwner(cat);
console.log(dog);
console.log(cat);
