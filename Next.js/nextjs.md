# Next.js
  * Versel 에서 React Framwork로 개발
  * React는 SPA(Single Page Application) 방식이며 CSR(Client Side Rendering)으로 동작하는데 이를 SSR(Server Side Rendering)방식으로 만들어주는 프레임워크
  
## SSR(Server Side Rendering) vs CSR(Client Side Rendering)
  1. <h3>SSR(Server Side Rendering)</h3>
    - 서버쪽에서 렌더링 준비를 끝마친 상태로 클라이언트에 전달하는 방식
    - 장점
      - 서버에서 페이지를 모두 렌더링하여 그려준다.
      - JS가 다운로드 되는 동안 사용자가 무언가를 보고 있을 수 있다.
    - 단점
      - 바뀌지 않아도 될 불필요한 부분까지 리렌더링한다.
      
  2. <h3>CSR(Client Side Rendering)</h3>
    - 클라이언트 쪽에서 서버에 요청하여 HTML, JS를 받아 렌더링을 하는 방식
    - 장점
      - 사이트 내의 페이지 이동시 빠르게 작동한다.
      - 필요한 데이터만 백엔드에서 불러와 서버에 부하가 덜하다.
    - 단점
      - 초기 로딩 시간이 오래 걸릴 수 있다.
      - SEO(Search Engine Optimization) 검색엔진 최적화에 취약하다.
      - 로딩 전까지 사용자는 빈 화면을 보고 있어야 한다.
    
## Next.js의 장점
1. **서버사이드 렌더링 (Server Side Rendering)**
    1. React는 SPA(Single Page Application)를 전제로 하고 있지만, 구동속도가 SSR에 비해 느린 단점을 개선.
2. **코드 스플리팅(Code splitting)**
    1. React에서 만든 컴포넌트들을 한번에 전체를 가져오는 것이 아니라 특정 페이지에 들어갈 경우 특정 페이지에 해당하는 것만 가져와서 사용할 수 있게 함.
