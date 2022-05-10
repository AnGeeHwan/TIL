# Vue.js
 - UI를 빠르게 개발하기 위해 만들어진 자바스크립트 프레임워크
 - MVVM(Model-View-ViewModel) 패턴으로, 어플리케이션 로직과 UI 분리를 위해 설계
 - SFC(Single File Components) 체계
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
  watch: , data에서 정의한 속성이 변화했을 때 추가 동작 수행할 수 있게 정의하는 속성
})
```

## 뷰컴포넌트
 - 전역컴포넌트
 - 지역컴포넌트


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
 
 
### Strongly Recommended
### Recommended
### Use with Caution
