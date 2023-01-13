// null , undefined

let variable; // 꽃이 있는지 없는지 모르겠다.
console.log(variable);

variable = null; // 아 꽃이 없다!
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof null); // object -> 단일데이터인 null의 타입이 object인 이유는 초기 자바스크립트의 mistake
console.log(typeof undefined); // undefined
