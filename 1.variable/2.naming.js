// 변수 이름(식별자)을 쓰는이유 ? 메모리주소가 너무 복잡해서.. 어떤 데이터를 담고 있는지 알기 힘들다.. => 가독성이 좋지 않다.

// 변수 이름은 저장된 값을 잘 나타낼 수 있는 의미 있는 이름, "구체적일 수록 좋다", "이 변수에는 어떤 값이 들어있는가?"
// 변수 이름은 예약어는 사용 할 수 없다.

/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis ) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌(_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성!
 */

let apple;
let redApple; // 카멜케이스

// 나쁜예제 💩
let number = 20; // 의미가없다.

// 좋은예제 ✨
let myAge = 20; // 나이라는 의미가 있다.

// 나쁜예제 💩
let audio1; // 의미가없다.
let audio2; // 의미가없다.

// 좋은예제 ✨
let backgruondAudio; // 의미가있다.
let windAudio;

// 꿀팁! 🍯
let audioBackgruond; // 같은 성격의 데이터를 선언할때는 틀이되는걸 먼저쓰고 구체적인걸 뒤로뺴자 이렇게하면 나중에 변수를 활용할때 편하다.
let audioWind;
