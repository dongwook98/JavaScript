// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드 (클래스 별로 공통으로 사용할수 있고 만들어진 인스턴스의 데이터에 참조할 필요없다면 )
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음 why? 클래스 자체로는 아무것도 채워지지않은 템플릿 상태이므로
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드로 두는게 좋다. why? this.name 부분이 인스턴스와 밀접하게 연관 되있기 때문
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana); // Fruit { display: [Function: display], name: 'banana', emoji: '🍌' }
console.log(Fruit.MAX_FRUITS); // 4

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple); // Fruit { display: [Function: display], name: 'apple', emoji: '🍎' }
console.log(orange); // Fruit { display: [Function: display], name: 'orange', emoji: '🍊' }
console.log(apple.name); // apple
console.log(apple.emoji); // 🍎
apple.display(); // apple: 🍎
orange.display(); // orange: 🍊

// static 의 사용예제
Math.pow();
Number.isFinite(1);
