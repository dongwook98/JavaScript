// MDN class: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }
/**
 * 📌 Tiger와 Dog는 공통점(Animal)이 있다. Animal 은 먹고,자고,컬러가 있다.
 * Tiger 와 Dog는 Aniaml의 속성과 메서드를 상속 받을 수 있다.
 */

class Champion {
  constructor(position) {
    this.position = position;
  }
  basicAttack() {
    console.log('기본공격!');
  }
  smile() {
    console.log('웃는다.');
  }
}

class Ezreal extends Champion {}
const ezreal = new Ezreal('원거리 딜러');
console.log(ezreal); // Ezreal { position: '원거리 딜러' }
ezreal.basicAttack(); // 기본공격!
ezreal.smile(); // 웃는다.

class leeSin extends Champion {
  // 자식클래스에서 constructor을 정의하는 순간 Animal의 constructor의 매개변수도 받아와야한다!
  constructor(position, skin) {
    super(position); // super키워드는 부모를 가르킨다.
    this.skin = skin;
  }

  // 필요한 메서드가 있다면 아래와 같이 추가 가능
  qSkill() {
    console.log('음파!');
  }

  // 오버라이딩 overriding - 부모클래스의 메서드를 변경 가능
  smile() {
    super.smile(); // 부모클래스의 메서드를 호출 할 수 있음 super 키워드 사용
    console.log('리신이 웃는다.'); // 자식클래스가 부모클래스의 메서드를 덮어 씌울수 있다.
  }
}

const leesin = new leeSin('정글', '용의 권 리신');
console.log(leesin); // leeSin { position: '정글', skin: '용의 권 리신' }
leesin.qSkill(); // 음파!
leesin.smile(); // 웃는다.\n리신이 웃는다.
leesin.basicAttack(); // 기본공격!
