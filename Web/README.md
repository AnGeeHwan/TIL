1.DocType
 * 웹표준을 지키는 문서타입이 여러 종류가 존재
 * HTML, XHTML 등이 있고, 각 문서들의 차이는 엄격하게 보냐 느슨하게 보냐의 차이
 * XHTML과 HTML의 차이점
``` 
XHTML이 XML 문법을 따르므로 HTML과 문법 규칙이 약간 다르다.
XHTML을 사용하면 할 수 있으나, HTML로는 불가능한 일이 있다.
HTML을 사용하면 할 수 있으나, XHTML로는 불가능한 일이 있다.
CSS를 이해하는 방식에 차이가 있다.
클라이언트 쪽의 스크립트(예: 자바 스크립트)를 다루는 방식에 차이가 있다.
```
 * XHTML에서는 모든 태그는 닫혀있어야 한다. img 태그도 닫은 것을 볼 수 있다. (우린 더 엄격한 방식인 XHTML에 익숙하다.)
```javascript
<!-- HTML 방식 -->
<img src="../img.png" alt="태그가 닫히지 않아도 되는 HTML.">
```
```javascript
<!-- XHTML 방식 -->
<img src="../img.png" alt="태그 닫는 것이 엄격한 XHTML."/> 
```

2.meta 태그
 * HTML문서가 어떤내용을 담고 있고, 키워드는 무엇이며, 누가 만들었는지에 대한 정보.
 * 문서 자체의 특성

3.script 태그의 위치
 * 자바스크립트는 삽입위치에 따라 스크립트 실행 순서와 브라우저 렌더링에 영향을 미침
 * DOM이 해석되는 중에 스크립트를 읽기 때문에 장시간 완성되지 못한 화면을 노출 할 수 있다.
 * 주로 문서를 초기화하는 가벼운 스크립트들이 사용되기를 권장한다.
 * 대부분은 </body> 바디 태그를 닫기전에 사용된다.

4.실행컨텍스트
 * 실행가능한 코드를 형상화하고 구분하는 추상적인 개념
 * 자바의 스택영역의 역할과 유사하다.
 * 스코프 - 어떤 변수의 대한 유효범위
 * let, const

5.DOM에서 id와 class의 차이, # SPA
 * id는 유일한 값, class는 여러번 중복이 가능하며, 여러 값을 띄어쓰기로 구분하여 넣을 수 있음.
 * 문서내에 id를 통해 해당 위치로 이동할 수 있다. 

6.float을 해제하지 않으면 안되는 이유
 * 자식이 float속성을 가지면 부모의 너비는 자식의 너비를 계산하지 않고 그리는 것이다.
 * 해결방법  :after에 clear속성 넣기
```css
.container:after {
  content: "";
  clear: both;
  display: block;
}
```

7.크로스 도메인 이슈 (CORS)
 * 동일 출처 정책(same-origin-policy)은 하나의 웹 페이지에서 다른 도메인 서버에 요청하는 것을 제한하는 것
 * 해결할 수 있는 여러 방법은 일반적인 방법인 헤더를 이용하는 방법과 jsonp 가 있다.
```javascript
 response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
```
 - POST, GET, OPTIONS, DELETE 요청에 대해 허용하겠다는 의미.
```javascript
response.setHeader("Access-Control-Allow-Origin", "*");
```
 - "*" 는 모든 도메인에 대해 허용하겠다는 의미. 즉 어떤 웹사이트라도 이 서버에 접근하여 AJAX 요청하여 결과를 가져갈 수 있도록 허용하겠다는 의미.
만약 보안 이슈가 있어서 특정 도메인만 허용해야 한다면 * 대신 특정 도메인만을 지정할 수 있음.

 * JSONP
 * CORS를 해결하는 유명한 방법 중 하나가 JSONP를 사용하는 것
 * html 문서에 script태그는 보안 정책에 적용되지 않는 점을 이용한 것
```javascript
var script = document.createElement('script'); 
script.src = '//kingbbode.com/jsonp?callback=parseResponse';
document.getElementsByTagName('head')[0].appendChild(script); 
function parseResponse(data){ 
  //callback method 
}
```
 * jsonp는 서버에서 지원하지 않으면 사용할 수 없다.
 * parseResponse함수가 실행되려면 script태그는 다음과 같아야 한다.
```javascript
<script type="text/javascript">
	parseResponse({"Name": "Foo", "Id": 1234, "Rank": 7})
</script>
```

