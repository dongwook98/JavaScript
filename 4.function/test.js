function add(a, b) {
  console.log(a + b);
}

let result = add(1, 2);
console.log(result); // undefined

// add(1,2) 함수호출! return이 없어도 작동됨
// 하지만 return이 없으므로 함수는 자동으로 return undefined
