# Javascript Essential

## 웹 앱의 구성요소
 * HTML, CSS, Javscript
 * Javascript 를 실행할 수 잇는 환경이 브라우저뿐만이 아니라 nodejs 등 다양한 환경이 존재한다.
 * CSR(클라이언트 사이드 렌더링) : HTML을 주도적으로 만들어서 UI를 표현하는 방법
 * SSR(서버 사이드 렌더링) : 웹 서버에서 주도적으로 HTML을 만들고 브라우저로 전송하는 방법
 * 앱의 성격에 따라 렌더링 방식을 다르게 적용

## 모던 자바스트립트와 개발환경
  * 브라우저 마다 호환되는 자바스크립트 버전이 다르기 때문에 개발 시 영향을 미침.
  * 모듈
    * 자바스크립트 파일 안에서 다른 자바스크립트 파일을 부르는 것
  * 번들러
    * 자바스크립트 파일 안에서 다른 자바스크립트 파일을 부를 수 있는데 이를 다 구문 구문해석하여 하나의 파일로 만들어주는 것
    * 모듈을 부르는 스펙을 못쓰던 상황을 쓰게 되었다.
    * 대표적인 번들러 Webpack
  * Babel ( 트랜스 파일러 )
    * 번들러가 여러 개의 파일을 하나로 만들 때 트랜스 파일러를 끼워넣어 최신버전의 문법을 사용가능한 하위버전의 문법으로 바꿔주는 역할
  


[출처 패스트캠퍼스: 김민태의 프론트엔드 아카데미]
