// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는법
string = "'안녕'";
console.log(string);

string = '안녕!엘리야!\t\t내 이름은 동욱이야\\\u09AC'; // \t:tab , \u:유니코드 , \n:줄바꿈
console.log(string);

// 템플릿 리터럴 (Template Literal) : 띄워쓰기 자유자재 , 변수 사용가능
let id = '동욱';
let greetings = "'안녕!, " + id + "✋\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}✋
즐거운 하루 보내요!'`;
console.log(greetings);
