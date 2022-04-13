# 모던 자바스트립트 딥다이브 스터디

### 진행사항
  * 12챕터 - 함수 진행중

## 목차
 - [변수](#변수)
 - [표현식과 문](#표현식과-문)
 - [데이터 타입](#데이터-타입)
 - [연산자](#연산자)
 - [객체 리터럴](#객체-리터럴)
 - [원시값과 객체의 비교](#원시값과-객체의-비교)
 - [함수](#함수) 
## 변수
  * 변수 선언만 호이스팅 된 상태 코드
  ```javascript
  console.log(score); // undefined

  score = 80; // 값의 할당
  var score;  // 변수 선언

  console.log(score); // 80
  ```
  * 변수명 선언시 의미하는 바를 유추가능하게 선언하는게 좋다. 
  * ex) x, y .. 으로 선언시 의미하는 바를 알 수 없어 코드를 보기 힘들다.
  
 ## 표현식과 문
  * 표현식 문: 변수 선언문, 할당문, 함수 선언문.
  * 표현식에 해당하지 않는 문: 조건문, 반복문.
  * 표현식이 아닌 문은 값처럼 사용할 수 없다!

## 데이터 타입
  * 숫자타입
  ```javascript
  var binary = 0b01000001 // 2진수
  var octal = 0c101;      // 8진수
  var hex = 0x41;         // 16진수
  ```
  * NaN, Infinity, -Infinity 도 number 타입
  
  * 문자열타입작성
  ```javascript
  var string;
  string = '문자열'; // 작은따옴표
  string = "문자열"; // 큰따옴표
  string = `문자열`; // 백틱 (ES6)
  ```
  * 백틱사용으로 문자열안에 변수를 넣을 수 있다.
  * 따옴표, \ ... 삽입시 앞에 \ 를 붙여 표현
  ```javascript
  'a\'' // a'
  ```
  * 심벌값은 이름이 충돌할 위험이 없는 유일무이한 값이므로 프로퍼티 키로 사용하면 좋다.
  ```javascript
  var key = Symbol('key');
  
  // 객체 생성
  var obj = {};
  
  obj[key] = 'value';
  console.log(obj[key]); // value
  ```
  
  * 객체타입
  ```javascript
  var a = 100;
  var b = 100;
  
  0x123: 100
  0x111: 식별자 a, 값은 0x123
  0x112: 식별자 b, 값은 0x123
  ```  
  
  * 변수에 값을 할당할 때마다 그 값에 따라 타입이 변환된다.
  
  ``` javascript
  typeof null // "object" 이 사항은 암기해야 함
  ```
  
## 연산자
  * 산술 연산자, 문자열 연결 연산자, 할당 연산자, 비교 연산자, 논리 연산자, 타입 연산자
  ```javascript
  // 아는게 좋으나 사용하지 않는 방향을 추천!
  // 문자열 연결 연산자 
  '1' + 2; // -> '12'
  1 + '2'; // -> '12'

  // 산술 연산자
  1 + 2; // -> 3

  // true는 1로 타입 변환된다.
  1 + true; // -> 2

  // false는 0으로 타입 변환된다.
  1 + false; // -> 1

  // null은 0으로 타입 변환된다.
  1 + null; // -> 1

  // undefined는 숫자로 타입 변환되지 않는다.
  +undefined;    // -> NaN
  1 + undefined; // -> NaN
  
  // toString() 대신 사용하기도 함 **
  123+''           // "123"
  (123).toString() // "123
  ```
  
  * == 동등비교연산자보다 확실한 === 타입일치연산자를 사용하는게 더 좋다.
  * NaN 의 경우 비교시 ===으로 하면 false로 나옴.
  ```javascript
  NaN === NaN         // false
  Number.isNaN(NaN)   // true
  Object.is(NaN, NaN) // true
  ```
  * null 타입은 object
  ```javascript
  typeof null // "object"
  ```
  
  * optional chaining - 값이 있으면 값이 나타나고 없으면 undefined
  ```javascript
  const obj = {
    a: {
      b:{
        c:{
          d: 1
        }
      }
    }
  }
  
  const obj2 = {
    a: {
      b: 0      
    }
  }
  
  obj.a?.b?.c?.d    // 1
  obj2.a?.b?.c?.d   // undefinded  
  ```

## 객체 리터럴
 * 동적 추가 가능
 ```javascript
 var person = {
  name: 'An'
 };
 
 person.age = 31;
 console.log(person); // {name: "An", age: 31} 
 ```
 * ES5 
 ```javascript
 var i = 0;
 var obj = {};
 // 계산된 프로퍼티 이름으로 프로퍼티 키 동적생성
 obj[prefix + '-' + ++i] = i;
 obj[prefix + '-' + ++i] = i;
 obj[prefix + '-' + ++i] = i;
 console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
 ```
 * ES6
 ```javascript
 const prefix = 'prop';
 var i = 0;
 // 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적생성
 var obj = { 
  [`${prefix}-${++i}]: i;
  [`${prefix}-${++i}]: i;
  [`${prefix}-${++i}]: i;
 };
 console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
 ```
## 원시값과 객체의 비교
 * const로 선언한 변수는 재할당 금지이나 하지만 그 변수에 할당한 객체는 변경 가능.
 ```javascript
 // const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
 const o = {};
 // const 키워드를 사용해 선언한 변수에 할당한 원시값(상수)은 변경할 수 없다.
 // 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
 o.a = 1;
 console.log(o); // {a: 1}
 ```
 * 불변성 : 변수 값을 변경하기 위해 원시 값을 재할당하면 새로운 메모리 공간을 확보하고 재할당한 값을 저장한 후 변수가 참조하던 메모리 공간의 주소를 변경 
 * 값에 의한 전달은 변수에는 값이 아니라 메모리 주소가 전달되는 것이다.
### 객체
 * 변경 가능한 값 ( 객체 타입의 값 = 변경 가능한 값 )
 * "값에 의한 전달"과 "참조에 의한 전달"은 식별자가 기억하는 메모리 공간에 저장되어 있는 값을 복사해서 전달한다는 면이 동일
 * 자바스크립트에는 "참조에 의한 전달"은 존재하지 않고 "값에 의한 전달" 만이 존재함.

## 함수


 
 
 
[출처_wikibook/mjs](https://github.com/wikibook/mjs/blob/master)

[스터디 참조 youtube_FEBoy](https://www.youtube.com/channel/UC68WPMGvA3Zj4qmqAuS8-ow)

[도서_모던자바스크립트 Deep Dive]
