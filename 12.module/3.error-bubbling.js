// Bubbling up, Propagating(전파) 🧼
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('여기선 이 에러는 못잡는다..');
    throw error; // 에러를 다시 던짐
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('error Catched!');
}
console.log('done!!');

// 에러는 전파 ,버블링 되므로 내가 에러를 잘 처리할 수 있는 곳, 적합한 곳에서 에러를 처리 하면 된다.
