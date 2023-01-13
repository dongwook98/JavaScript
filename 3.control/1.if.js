// 조건문 Conditional Statement
// MDN if: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else
// if(조건) { }
// if(조건) { } else { }
// if(조건1) { } else if(조건2) { } else { }
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
  let a = 1;
  console.log(a);
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😍');
}

if (2 < 1) {
  console.log('출력되면 안됨!');
}
