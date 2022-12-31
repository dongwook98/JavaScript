// 1. 베열, 객체 등의 참조자료형이 필요한 이유
    // 다량의 데이터를 한번에 다룰 수 있다.
        let arr = [0,1,2,3,4,5,6,7,8];

// 2. 배열은 요소의 개수, 즉 배열의 길이를 나타내는 (length) 프로퍼티를 갖는다.
    console.log(arr.length) //  9
    //  TMI : 배열의 최대 길이는 ? // 2^32 - 1 = 4,294,967,295 = 42 억 9 천만 요소
    
// 3. 배열의 타입은 (object) 이다.     
    console.log(typeof arr) // object

// 4. 배열인지의 여부를 확인하기 위해서는 Array.isArray() 를 사용한다.
    console.log(Array.isArray(arr)); // true

    // 4-1. 빈 배열인지 확인?
    let arr2 = [];
        console.log(arr2.length === 0); // true 
        console.log(arr2 === []); // false

// 5. 배열은 순서 정보 - (index)를 가지고 있는 참조자료형이다.
    // index를 활용하여 배열의 각 요소 element 를 조회할 수 있다.
    console.log(arr[0]); // 0
    console.log(arr[6]); // 6
    console.log(arr[8]); // 8

// 6. 배열 내장 메서드 -> "배열에 사용할 수 있는 자동으로 생성되어 있는 함수"
    // Mutable Method -> 원본 배열을 직접 변경함
    // ? pop push shift unshift splice
    // Immutable Method -> 원본 배열을 변경하지 않음
    // ? slice concat join

    // 6-1. 원본 배열을 변경하는 메서드 : mutable
        // push() : 맨 뒤 요소 추가 -> 변경된 배열의 길이 리턴
        console.log(arr.length); // 9
        console.log(arr.push(9)); // 10 -> 변경된 배열의 길이 리턴
        console.log(arr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
        console.log(arr.length);  // 10

        // pop() : 맨 뒤 요소 제거 -> 제거된 요소 리턴
        console.log(arr.pop()); // 9 -> 제거된 요소 리턴
        console.log(arr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
        console.log(arr.length); // 9

        // unshift() : 맨 앞 요소 추가 -> 변경된 배열의 길이 리턴
        console.log(arr.unshift(9)); // 10 -> 변경된 배열의 길이 리턴
        console.log(arr); // [ 9, 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
        console.log(arr.length); // 10

        // shift() : 맨 앞 요소 제거 -> 제거된 요소 리턴
        console.log(arr.shift(9)); // 9
        console.log(arr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8  ]
        console.log(arr.length); // 9

        // splice() : 원본 배열 에서 잘라내기
        console.log(arr.splice(7)); // [ 7, 8 ]
        console.log(arr.splice(1,7)); // [ 1, 2, 3, 4, 5, 6 ]
        console.log(arr); // [ 0 ]
        console.log(arr.length); // 1

        arr.splice(1, 7, '1', '2', '3', '4', '5', '6', '7');
        console.log(arr); // [ 0 , '1' , '2', '3' ,'4' , '5' , '6' , '7']
        console.log(arr.length) // 8

        // reverse() : 배열 인덱스 전체를 뒤집음
        arr.reverse();
        console.log(arr); // ['7', '6', '5', '4', '3', '2', '1', 0 ]
     
        // fill() : 배열 요소 전체를 () 로 바꿈
        arr.fill(0)
        console.log(arr); // [ 0, 0, 0, 0, 0, 0, 0, 0 ]
             
    // 6-2. 원본 배열을 변경하지 않는 메서드
        // slice () : 원본 배열 복사
        let slice1 = arr.slice(0, 4);
        console.log(arr); //[   0, 0, 0, 0, 0, 0, 0, 0  ]
        console.log(arr.length); // 8
        console.log(slice1); // [ 0, 0, 0, 0 ]
        console.log(slice1.length); // 4
        // 배열에 대해 얕은 복사가 일어난다.
        // 깊은 복사와 얕은 복사 -> 이건 심화 학습 과제!
        // Unit9과제에도 등장

        // concat() : 원본 배열 복사 한후 뒤에 추가
        let arr3 = arr.concat(9); // [   0, 0, 0, 0, 0, 0, 0, 0, 9 ]
        console.log(arr3); // [   0, 0, 0, 0, 0, 0, 0, 0, 9 ]
        console.log(arr.length); // 8

        let arr4 = arr.concat([9, 10, 11]);
        console.log(arr4); // [ 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 11]
        console.log(arr4.length); // 11

        // join() : 배열을 문자열로 만듬 괄호안에 들어오는게 구분자로 사용됨
        let str1 = arr.join('');
        console.log(str1); //  00000000
        let str2 = arr.join(':'); 
        console.log(str2); // 0:0:0:0:0:0:0:0
    //? -> 16번, 17번 문제

        // split() : 문자열을 배열로 만듬 괄호안에 들어오는게 구분자로 사용됨
        let str = 'kang dong wook';
        console.log(str.split('')); //['k', 'a', 'n', 'g', ' ', 'd', 'o', 'n', 'g', ' ', 'w', 'o', 'o', 'k']
        console.log(str.split(' ')); // [ 'kang', 'dong', 'wook' ]
        console.log(str.split(' ',1)); // [ 'kang' ]
        console.log(str.split(' ',0)); // []
    // 6-3 그외 메서드
        // indexOf()
        let arr7 = [0,1,2,3,4,5,6,7,8]
        console.log(arr7.indexOf(5));
        console.log(arr7.indexOf(10));

function CheckArrayElements (num) {
    for(let el=0; el<=arr7.length-1; el++){
        if(arr7.indexOf(num) !== -1){
            return true;
        }
        else{
            return false;
        }
    }
}

        //includes()
        console.log(arr7.includes(5));
        console.log(arr7.includes(10));

// 7. 배열은 반복문을 사용하기에 매우 좋은 자료형이다.
// 배열의 길이와 인덱스를 활용하여 배열 내부에 있는 모든 요소를 순회할 수 있다.
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }        

    // for ~ of 문
    for (let el of arr){
        console.log(el)
    }

    function arrToString(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++){
            if(i % 2 === 0){
                result = result + arr[i];
            }
        }
        return result;
    }

    // '모든 요소'를 순회할 때는 for of문을 사용하면 더 간결하고 편리하다.

    function arrToString(arr) {
        let result = 0;
        for (let el of arr) {
            if(el % 2 === 0) {
                result = result + el;
            }
        }
        return result;
    }

    console.log(arrToString(arr))
