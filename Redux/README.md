# redux

### Presentational 컴포넌트와 Container 컴포넌트
 * Presentational 컴포넌트
    * 오직 뷰만 담당하는 컴포넌트
    * DOM 엘리먼트, 스타일을 갖고 있으며, Presentational 컴포넌트나 Container 컴포넌트를 갖고있을 수도 있음
    * 리덕스 스토어에 직접적인 접근 권한이 없으며 오직 props로 데이터만 가져올 수 있다.
    * state를 갖고잇을 경우 오직 UI에 관련된 것만 가지고 있어야 함
 * Container 컴포넌트
    * Presentational 컴포넌트들과 Container컴포넌트들 관리 담당
    * 내부에 DOM 엘리먼트 직접적 사용 X, 감싸는 용도일 때만 사용, 스타일 X
    * 상태를 갖고 있을 때가 많음, 리덕스에 직접적으로 접근 가능
 
 ### combineReducers 여러개의 서브리듀서를 하나로 합쳐줌.
 
