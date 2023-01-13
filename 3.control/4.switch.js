// 조건문 Conditional Statement
// switch
// MDN switch: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0:월요일, 1: 화요일... 6: 일요일
let dayName;
if (day === 0) {
  dayName = '월';
} else if (day === 1) {
  dayName = '화';
} else if (day === 2) {
  dayName = '수';
} else if (day === 3) {
  dayName = '목';
} else if (day === 4) {
  dayName = '금';
} else if (day === 5) {
  dayName = '토';
} else if (day === 6) {
  dayName = '일';
}
console.log(dayName);

switch (day) {
  case 0:
    dayName = '월';
    break;
  case 1:
    dayName = '화';
    break;
  case 2:
    dayName = '수';
    break;
  case 3:
    dayName = '목';
    break;
  case 4:
    dayName = '금';
    break;
  case 5:
    dayName = '토';
    break;
  case 6:
    dayName = '일';
    break;
  default:
    console.log('해당하는 요일이 없음!');
}
console.log(dayName);

let condition = 'bad'; // okay,good -> 좋음, bad -> 나쁨!
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}
console.log(text);
