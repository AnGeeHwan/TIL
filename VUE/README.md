# Vue.js
 - UI를 빠르게 개발하기 위해 만들어진 자바스크립트 프레임워크, SPA(Single Page Application) 하나의 화면에서 모듈단위 템플릿만 교체.
 - 전체 페이지를 하나의 페이지에 담아 동적으로 화면이 변경되며 표현.
 - MVVM(Model-View-ViewModel) 패턴으로, 어플리케이션 로직과 UI 분리를 위해 설계.
 - SFC(Single File Components) 체계.
```javascript
<templete>
 <!-- HTML 태그 -->
</templete>

<script>
export default {
 // 자바스크립트
}
</script>

<style>
 /* CSS 스타일 내용 */
</style>
```

## 장점
 - 다른 프레임워크보다 유연하고 가벼움
 - 기존의 웹 어플리케이션의 일부 UI만 적용하는 것도 가능
 - SPA구성을 위해 필요한 라우터 기능 지원
 - 가상 DOM을 지원하여 빠른 UI렌더링 가능
 - 양방향 바인딩과 가상돔 기반 렌더링 특징 모두 보유

## 인스턴스
```javascript
new Vue({
  el: , // 인스턴스가 그려지는 화면 시작점 ( html 태그 )
  template: , // 화면에 표시할 요소 ( html, css )
  data: , // 뷰의 반응성 속성
  methods: , // 화면 동작 및 이벤트 로직 제어 메소드
  created: , // 뷰의 라이프사이클과 관련된 속성
  watch: , // data에서 정의한 속성이 변화했을 때 추가 동작 수행할 수 있게 정의하는 속성
})
```

## 뷰컴포넌트
 - 전역컴포넌트
   - 모든 자식 컴포넌트에서 사용 가능
   - 쉽게 호출 가능
```javascript
Vue.component('app-header', {
 template: '<div>Header</div>'
})
```
 - 지역컴포넌트
   - 인스턴스 생성시, 생성자 내부에서 선언
   - 특정 인스턴스 내부에서만 호출가능
```javascript
new Vue({
 el: '#app',
 components: {
  'app-header' : {
   template: '<div>Header</div>'
  }
 }
})
```
 - 컴포넌트 옵션 요소
   - template : 화면에 표시하려는 내용
   - data : 함수 형태로 컴포넌트가 바라보는 객체 지정
 ```javascript
 data : function() {
  return {
   msg: "hello"
  }
 }
 ```
   - props : 자식 컴포넌트에게 값 전달시 사용
   - methods : 자식에서 부모로 값을 넘겨줄 때, 이벤트 함수를 이용하여 처리
```javascript
methods: {
 increaseClick: function(e){
  this.$emit('upNum');
 }
}
```
 - 컴포넌트간 통신은 상위에서 하위로 이뤄지는 event, 하위에서 상위로 이뤄지는 props 존재
 - event
 -  상위 컴포넌트로 전달 및 통신이 목적이기 때문에 emit으로 이벤트를 전달
```javascript
new Vue({
	el : '  ',
    components:{
    	"하위 컴포넌트" :{
    		methods:{
    			"이벤트 명" : function(){
        			this.$emit('전달 메시지');
        		}
    		}
        }
    }
    methods :{
    	"이벤트 명" : functuin(){
        	event emit에 따른 동작 정의
        }
    }
});
```
 - 상위 컴포넌트에서 event emit을 전달받았을때 어떤 메소드를 실행할지를 연결
```html
<div id="el명">
	<"컴포넌트" v-on : "하위 컴포넌트에서 발생한 이벤트" = "상위 컴포넌트의 method 명"></"컴포넌트">
</div>
```
 - props
 - 하위 컴포넌트에 props라는 옵션 이용
```javascript
new Vue({
	el : '  ',
    components:{
    	"하위 컴포넌트 이름" : {
        	props : ['프롭스 속성명']
        }
    }
});
```
 - html에서 v-bind 또는 :를 사용하여 상위컴포넌트의 데이터명과 프롭스 속성 연결
```html
<"컴포넌트" v-bind : "프롭스 속성명" = "상위 컴포넌트 데이터명"></"컴포넌트">
```
[참조 ](https://jangcenter.tistory.com/133?category=1055253)

## 스타일 가이드

### 필수(에러방지)
 - 컴포넌트 이름에 합성어 사용
 - Bad
 ```javascript
 export default {
  name: 'Todo',
  // ...
 }
 ```
 - Good
 ``` javascript
 export default {
  name: 'TodoItem',
  // ...
 }
 ```
 - Component Data (컴포넌트의 data는 반드시 함수여야 함.)
 - Bad
 ```javascript
 export default {
   data: {
     foo: 'bar'
   }
 }
 ```
 - Good
 ```javascript
 export default {
   data () {
     return {
       foo: 'bar'
     }
   }
 }
 ```
 - Props 정의 (Prop은 가능한 상세하게 정의되어야 합니다.)
 - Bad
  ```javascript
 // This is only OK when prototyping
 props: ['status'] 
 ```
 - Good
```javascript
 props: {
   status: String
 }

  // Even better!
 props: {
   status: {
     type: String,
     required: true,
     validator: function (value) {
       return [
         'syncing',
         'synced',
         'version-conflict',
         'error'
       ].indexOf(value) !== -1
     }
   }
 }
 ```
 - v-for에 key 지정 (v-for는 항상 key와 함께 사용합니다.)
 - v-if와 v-for를 동시에 사용 X (v-for가 사용된 엘리먼트에 절대 v-if 사용 금지)
 - Bad
```html
 <ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```
 -Good
```html
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```
 - 컴포넌트 스타일 스코프 ( 컴포넌트 별로 style에 scoped를 주어 스타일을 각자 사용 )
   - <style scoped> 기능 사용
 - Private 속성 이름 ( 커스텀 사용자 private 프로퍼티에서 항상 접두사 $ 사용 )
 
[참조-Vuejs 공식](https://v2.vuejs.org/v2/style-guide/?redirect=true#Component-name-casing-in-templates-strongly-recommended)

