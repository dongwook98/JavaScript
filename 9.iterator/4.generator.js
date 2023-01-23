// const multiple = {
//     [Symbol.iterator]() {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return {
//             value: num++ * 2,
//             done: num > max,
//           };
//         },
//       };
//     },
//   };
// 위와같이 복잡한 과정을 거치지 않고 이터러블한이터레이터를 만들 수 있는게 제너레이터다!!

function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    yield i ** 2; // yield: 사용자가 원할때 하나하나씩 리턴해줌
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // return(): 반복을 끝내!
// multiple.throw('Error!'); : 나중에 배우자 try,catch사용..!

next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
