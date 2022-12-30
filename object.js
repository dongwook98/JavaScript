//  1. 객체는 배열과 마찬가지로 다량의 데이터를 한 번에 다룰 수 있는 참조자료형 데이터
    // 0개 이상의 프로퍼티의 조합으로 되어 있다.
    // 프로퍼티는 키와 값의 조합으로 이루어져 있다.
    { name : "강동욱"}
    // 프로퍼티(속성) => 키 + 값 

//  2. 배열과 객체 비교 : 배열이 데이터의 순서정보(index)를 가지고 있는 자료형이었다면,
    // 객체는 데이터에 이름(key)을 부여할 수 있다.
    let personObj = { 
        name:"강동욱", 
        position: "front-end", 
        age:25, 
        phone: "010-1234-5678"
    }
    let personArr = ["강동욱","front-end",25,"010-1234-5678"]
    console.log(personObj.name) // "강동욱"
    // key를 통해 데이터에 의미를 부여할 수 있고, (key)를 사용하여 데이터에 접근할 수 있다.

//  3. JavaScript에서 사용 가능한 모든 타입의 값은 프로퍼티가 될 수 있다.
    // 프로퍼티: 객체의 상태를 나타내는 값(data)
    // 메서드: 프로퍼티를 참조하고 조작할 수 있는 동작 => 객체 내부의 함수

    let mygirlFriend = {
        이름: "김예리", // 문자열
        나이: 26, // 숫자
        취직여부: true, // boolean
        보유가방: ["루이비똥", "샤넬", "프라다"], // 배열
        남자친구 : {
            name: "강동욱",
            age: 25
        }, // 객체
        기쁨: function() {
            console.log(`${this.이름}가 기뻐한다.`);
        }, // 함수(메서드)
        화내기: function() {
            console.log(`${this.이름}가 화낸다.`)
        }
    }
    //? this는 무엇인가요? 
    // this에 대해서는 S2에 자세히 학습하기 때문에, 
    // 지금은 여기서의 this가 mygirlFriend라는 객체를 가리킨다는 정도로만 기억해 주세요.

//  4. 객체 다루기
    // 1) 프로퍼티를 참조(Read)하는 방법은 두 가지가 있다.
        // (1) Dot notation
            console.log(mygirlFriend.이름) // "김예리"
        // (2) bracket notation
            console.log(mygirlFriend["이름"]) // "김예리"
            // bracket notation 사용시 반드시 문자열을 입력해야 한다.
            console.log(mygirlFriend[이름]) // 에러 not definded
            // 단, 이런 경우는 가능하다.
            let 이름 = "이름";
            console.log(mygirlFriend[이름]); // "김예리"   

    // 2) 프로퍼티 추가(Create)
        mygirlFriend.핸드폰번호 ="010-1234-5678"; // mygirlFriend 핸드폰번호 프로퍼티 추가
        // mygrilFriend["핸드폰번호"]="010-1234-5678";    
        console.log(mygirlFriend); 
        // 빈 객체에 추가하면? (15번 문제처럼)
        let newObj = {};
        newObj['이름'] = mygirlFriend['이름']   // 새로운객체 빈 객체에 mygrilFriend['이름'] 프로퍼티 추가,할당

    // 3) 프로퍼티 제거
        delete mygirlFriend.핸드폰번호 //   핸드폰번호라는 키를 가진 프로퍼티 제거   

    // 4) 프로퍼티 수정(Update)
        mygirlFriend.나이 = 24;
        console.log(mygirlFriend.나이)  // 나이라는 키를 가진 프로퍼티가 26에서 24로 수정됨.
        
    // 5) 프로퍼티 유무 확인
        console.log('나이' in mygirlFriend) // true // mygirlFriend라는 객체 안에 '나이'라는 키를 가진 프로퍼티가 존재하는지 여부
        console.log('핸드폰번호' in mygirlFriend) // false // mygirlFriend라는 객체 안에 '핸드폰번호'키를 가진 프로퍼티가 존재하는지 여부

// 5. 객체 내부에 값으로 들어 있는 배열과 객체, 함수도 똑같은 방법으로 접근 가능합니다.       
        mygirlFriend.보유가방.push('구찌'); // 보유가방이라는 키를 가진 프로퍼티 배열 끝에 '구찌' 추가 
        mygirlFriend.남자친구['job'] = '프로그래머'; // 남자친구라는 키를 가진 객체에 job이라는 키를 가진 프로퍼티 추가
        mygirlFriend.화내기(); // 김예리가 화낸다. // mygirlFriend 객체에 화내기라는 키를 가진 함수 호출

//6. 객체 메서드
        // 1) Object.keys() -> key를 모아서 배열로
        console.log(Object.keys(mygirlFriend)) // ['이름', '나이', '취직여부', '보유가방', '남자친구', '기쁨', '화내기']
    
        // 2) Object.values() -> value(값)을 모아서 배열로
        console.log(Object.values(mygirlFriend)) // ['김예리', 24, true, Array(4), {…}, ƒ, ƒ] 배열과 객체와 매서드는 생략된 것!!

        // 3) Object.assign() -> 객체 합치기, 객체 복사
        let user = {name: 'kimcoding', job: 'student'};
        let info = {job: 'engineer' ,age: 25};
        let userInfo = Object.assign(user,info);
        console.log(userInfo) // {name: 'kimcoding', job: 'engineer', age: 25}
        // 동일한 키 job의 값이 'engineer'가 된 이유?
        // Object.assign( , ) 쉼표 앞에 오는 객체에 뒤에 객체를 덮어 씌우는것!!
        console.log(user) // {name: 'kimcoding', job: 'engineer', age: 25}
        console.log(info) // {job: 'engineer', age: 25}
        //arr.slice()와 동일한 기능으로 사용할 수도 있다.
        let myMom = Object.assign({}, mygirlFriend);
        //복사한후 재할당(Update),추가,삭제해서 데이터 수정 !
        myMom['이름'] = '란의';
        myMom.나이 = 51;
        delete myMom.남자친구;
        myMom['남편']= { 이름:"강서용" , 나이:55 , 직업:"배관사" };
        myMom.보유가방 = '에르메스';
        console.log(myMom); // {이름: '란의', 나이: 51, 취직여부: true, 보유가방: '에르메스',남편: {이름:'강서용' ...},기쁨: f  , …}
        console.log(mygirlFriend); // {이름: '김예리', 나이: 24, 취직여부: true, 보유가방: Array(4), 남자친구: {이름:'강동욱'…}, 기쁨: f , …}

        // 4) Object.is(obj1, obj2) -> 두 객체가 같은지 비교
        console.log(Object.is(myMom, mygirlFriend)); // false

// 7. for in 반복문
for (let key in myMom){
    if (typeof myMom[key] === 'object') {
        delete myMom[key]
    }
} // 만약 프로퍼티중에 객체 타입 이 있다면 그 프로퍼티를 지워라
console.log(myMom[key]);
// 남편 프로퍼티가 삭제됨 
        
        






