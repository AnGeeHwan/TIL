# React
 * Facebook 이 운영하는 오픈소스 프론트엔드 라이브러리
 * 자바스크립트의 UI 라이브러리
 
 * 특징
    * Single Page Application
    * 컴포넌트 기반
    * 선언형 프로그래밍
    * Virtural DOM
    * Learn Once Write Anywhere (React Native)
    * 높은 자유도

  * React 도입 전 고려해볼만 한 것들
    * Internet Explorer - 구식 자바스크립트 엔진으로 적합하지 않다.
    * Learning Curve - 자유도가 높은 만큼 Vue 같은 프레임워크보다 러닝커브가 존재
    
 > 한입 크기로 잘라먹는 리액트 winterlood 이정환 강사님의 세미나에서 인용

### Hooks
 * useState - 함수형 컴포넌트에서도 가변적인 상태를 지니게 해줌. 상태관리시 사용.
 * useEffect - 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 함. 특정 값이 변경 될 때만 호출하게도 가능.
 * useReducer - useState 보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주려 할 때 사용.
 * useMemo - 함수형 컴포넌트 내부에서 발생하는 연산을 memoization을 통해 최적화 해줌.
 * useCallback - useMemo와 비슷한 함수. 렌더링 성능을 최적화 하는 상황에서 주로 사용. 이벤트 핸들러 함수를 필요할 때만 생성.
 * useRef - 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 함. 렌더링과 관련되지 않은 값을 관리할 때도 사용.

### LifeCycle

