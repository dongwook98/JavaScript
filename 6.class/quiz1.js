// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  countUp() {
    this.#value++;
  }

  countDown() {
    this.#value--;
  }

  get value() {
    return this.#value;
  }
}

let counter1 = new Counter(5);
console.log(counter1); // Counter {}
counter1.countUp(); // 6
counter1.countDown(); // 5
console.log(counter1.value); // 5

// 풀이

class Counter2 {
  #value; // 클래스레벨의 속성은 인스턴스 레벨의 속성에 상속 해줄 수 있다.
  //접근제어자(#)을 사용해 외부에서 value 속성을 변경하지 못하게 막을수있다.
  constructor(startValue) {
    // constructor는 매개변수를 다르게 받을 수 있다.
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter2(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value); // 2 // getter 사용했기때문에 호출안해도 읽어드림.
