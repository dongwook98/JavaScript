// try catch finally
function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없음');
  return '파일의 내용'; // 에러를 던지면 밑에코드는 실행되지 않음.
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (err) {
    console.log(err);
    // console.log(error.name); // 에러라는 오브젝트의 이름
    // console.log(error.message); // 에러라는 오브젝트의 메시지
    // console.log(error.stack); // 에러라는 오브젝트의 경로
    content = '기본내용';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!');
  }
  const result = 'hi ' + content;
  return result;
}

const result = processFile('경로');
console.log(result);

// throw new Error('에러에 대한 설명 전달 가능')
// 에러를 강제적으로 발생 시킬 때 사용!, 어플리케이션이 crash 됨

// * try catch finally
// 에러를 좀 더 우아하게 만들 수 있음, 어플리케이션이 crash가 되지않음. , 개발자가 어떻게 에러를 처리할 것인지 기회를 가질 수 있음.
// try { 에러를 던질수있는 함수 } : try로 에러인지 아닌지 판단
// catch (error) { 에러에 대한 적절한 처리 가능 } : 에러가 발생했다면 에러에 대한 적절한 처리 가능
// finally { '성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!' } 에러를 던질수있는 함수가 에러를 발생시키던,아니던 마지막으로 무언가 할려면 사용하는 것
