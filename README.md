# TLI





 
## [Typescript](./Typescript)

## AJAX (Asynchronous JavaScript And XML)
 * 서버와 비동기적 통신하는 기술
 * 새로고침 없이 서버에게 GET요청 가능
 * 장점
  * 새로고침이 없으므로 웹페이지 전환이 부드러워짐
 * 개별적 개발시 CORS 정책을 끄고 사용

## Error 해결 방안

### firebase storage 사용시 import Error의 경우 v9로 업데이트 
 * v9 설치후
 ```javascript
 npm i firebase@9.6.8
 ```
 * import 예시 
```javascript
import firebase from 'firebase/compat/app'
import "firebase/compat/storage"
import "firebase/compat/firestore"
```
