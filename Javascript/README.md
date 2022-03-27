# JavaScript

### Ajax ( Asynchronous JavaScript and XML )
 * 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식
 * 전통적인 방식( 웹페이지 전체 리렌더링 )과 다른 장점
   1. 변경할 부분을 갱신하는데 필요한 데이터만 서버로부터 전송받기 떄문에 불필요한 데이터 통신이 발생하지 않음
   2. 변경할 필요가 없는 부분을 다시 렌더링 하지않음 (화면이 순간적으로 깜빡이는 현상 발생하지 않음)
   3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않음

### JSON ( JavaScript Object Notation )
 * 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷
 * 표기방식
 ```javascript
 {
  "name": "Gavin",
  "age": 31,
  "alive": true,
  "hobby":["football", "watch movies"]
 }
 ```
 * JSON.stringify - 객체, 배열을 JSON 포맷의 문자열로 변환
   * 직렬화(serializing) - 클라이언트가 서버로 객체를 전송하려고 객체를 문자열화 하는 것
 * JSON.parse - JSON 포맷의 문자열을 객체로 변환, 배열이 JSON 포맷의 문자열로 변환되있는 경우 문자열을 배열 객체로 변환.
   * 역직렬화(deserializeing) - 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이므로 객체로 사용하기위해 객체화 하는 것
 ```javascript
 const obj = {
  name: 'Gavin',
  age: 31,
  alive: true,
  hobby:['football', 'watch movies']
 }
 
 const json = JSON.stringify(obj);
 console.log(typeof json, json);
 // string {"name": "Gavin","age": 31,"alive": true,"hobby":["football", "watch movies"]} 
 
 const parsed = JSON.parse(json);
 console.log(typeof parsed, parsed);
 // object {name: "Gavin",age: 31,alive: true,hobby:["football", "watch movies"]}
 ```
 
 
 
 

[출처]모던 자바스크립트 Deep Dive
