# TLI

git 정리 & 프로그래머스 & 강의 & 리액트를 다루는 기술 & 백준


### 도서
 * 리액트를 다루는 기술

### 강의
 * Udmey 한입 크기로 잘라먹는 리액트 (수료)
 * fastCampus 김민태의 프론트엔드 아카데미 : 제 1강 JavaScript & TypeScript Essential
 * Inflearn 만들면서 배우는 리액트 : 기초 (진유림님 강의) - 코로나 격리기간 중 강의 수강시작(22-03-23~) - 수료

### 프로그래머스, 백준 연습 진행 - 알고리즘 
 
### 파이썬 스터디 - 매주 목요일 리뷰
 * 백준 + 점프 투 파이썬

### 원티드 프리온보딩 커리큘럼을 보고 만들어 볼 것들 도전!
 * 날씨 api 활용한 날씨앱
   * js 개발 후 ts로 리뉴얼
   * 타임아웃과 인터벌 - 자동으로 리프레쉬되는 날씨 앱
   * react i18n, Babel Edit - 다국어 지원
   * slick.js 캐로셀 만들기
   * 자동완성과 검색, 스로틀링 - 동네 날씨 검색
   * css theme 적용 - 다크모드 대응
 * 인스타 API이용하여 인스타그램
   * Netlify 웹 배포 및 공유
 * 게시판
 * multipart로 이미지 업로드
 * REST API
 * 실시간 주가 현황차트보여주기
 * 간단한 함수테스트 코드 작성
 * 로그인 / 회원가입/ 비번찾기/ 비번변경화면 만들기
 * storybook 
 * 코로나 19 감염자 현황사이트 만들기
 * Victroy.js 이용하여 차트 만들기
 * 간단한 Canvas 그려보기
 * 드래그 할 수 있는 테이블
 
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
