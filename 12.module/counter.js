let count = 0;
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}

// 노출하고싶은데 한개라면 export defalut
// 여러개라면 export
// 모듈화는 내가 원하는 것만 외부로 노출할수있는 방법!
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
// 모듈이란?
// 자바스크립트 파일을 캡슐화 할 때 사용
