// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Staff {
  #name;
  #departmentName;
  #workingTime;
  constructor(name, departmentName, workingTime) {
    this.#name = name;
    this.#departmentName = departmentName;
    this.#workingTime = workingTime;
  }

  salaryCalculate = (timemoney) => {
    let salary = 0;
    salary = this.#workingTime * timemoney;
    return salary;
  };
}

const dongwook = new Staff('동욱', '총무팀', '200');
console.log(dongwook); // Staff { salaryCalculate: [Function: salaryCalculate] }
console.log(dongwook.name); // undefined
console.log(dongwook.salaryCalculate(10000)); // 2000000

const cheolsu = new Staff('철수', '사무보조', '100');
console.log(cheolsu.salaryCalculate(8000)); // 800000

// 풀이
class Employee {
  constructor(name, department, housrsPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.housrsPerMonth = housrsPerMonth;
    this.payRate = payRate;
  }
  calulatePay() {
    return this.housrsPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, housrsPerMonth) {
    super(name, department, housrsPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}
class ParttimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, housrsPerMonth) {
    super(name, department, housrsPerMonth, ParttimeEmployee.#PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new ParttimeEmployee('밥', 's/w', 20);
console.log(ellie.calulatePay()); // 300000
console.log(bob.calulatePay()); // 160000

// ✨ static, #, super, get, set 을 잘 사용하자. ✨
/** 👍 Tip. PAY_RATE static 멤버 필드는 클래스 내부에서만 사용하죠? 외부에서 참조할 필요도,
 * 그리고 다른 값으로 변경하면 안되니 static private으로 설정해서 외부에서는 값을 보지도,
 * 수정 하지도 못하게 캡슐화 해주는게 좋아요.
 */
