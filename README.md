# TLI

git 정리 & 프로그래머스 & 강의 & 리액트를 다루는 기술 & 백준


### 리액트를 다루는 기술 (정독중)

### 강의
 * Udmey 한입 크기로 잘라먹는 리액트 (수료)
 * fastCampus 김민태의 프론트엔드 아카데미 : 제 1강 JavaScript & TypeScript Essential


### 프로그래머스, 백준 연습 진행 - 알고리즘 
 * 기본부터 JavaScript 관련문제 ( 20문제 ) - 2022.02.22
 * 7문제 추가 ( 2022.02.23 )
 * SQL 고득점 KIT 진행( 2022.02.25 )


### 파이썬 스터디 - 매주 목요일 리뷰
 * 백준 + 점프 투 파이썬 - 함수 활용
 
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
