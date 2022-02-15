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

## 기능
 * Static Generation - 값이 변경이 없다면 SSR보다 빠르기때문에 고정값이면 이 기능 사용 추천(blog같은 사이트)
 * Link Component - < a > 사용하는 링크는 새로 다 페이지를 불러오나 Link 사용시 필요한 부분만 다시 불러와서 속도 더 빠르다
   * Link 컴포넌트 사용시 Client-side navigation 이 가능하다. 이는 자바스크립트를 사용하여 페이지 전환을 하므로 더 빠르게 작동한다.
 ```
 <h1 className="title">
  Learn <a href="https://nextjs.org">Next.js!</a>
</h1>
 ```
 
 ```
 <h1 className="title">
  Read{' '}
  <Link href="/posts/first-post">
    <a>this page!</a>
  </Link>
</h1>
 ```
  * Code splitting - 코드 분할하여 필요할 때만 필요한 부분을 불러오게 함.
  * Prefetching - Next.js의 프로덕션 빌드에서 Link 구성 요소가 뷰포트에 나타날때 자동으로 백그라운드에서 미리 페이지를 불러와 즉각적으로 페이지 전환이 가능하게 함. 특정사이트로 이동시에는 a태그를 사용하지만 내부 경로이동시에는 Link 기능 사용 추천!
  * Head, Image 등 사용하기 편하게 만들어 놓음.
 
  * hydration - 페이지가 브라우저에 로드되고 자바스크립트 코드가 실행되며 페이지가 인터렉티브하게 동작할 상태가 되는 과정
  * Pre-rendering
    * HTML 파일만 가져와도 무언가 보이면서 렌더링된다.
    * No Pre-rendering 일 경우 사용자가 비어잇는 화면을 먼저 보게 된다.
    * Static Generation - 고정된 것들을 빌드타이밍때 이미 만들어서 보여준다.
    * Server-side Rendering - 사용자 한명 한명이 요청할 때마다 그에 맞는 것을 렌더링해서 보여준다.
    * 이 두가지 방법은 페이지 별로 설정해서 컨트롤 가능함! (ex. A page는 Static Generation, B page는 Server side Rendering)
  * getStaticProps 사용시 빌드할 경우 번들에 포함되어 노출되는 것에 대해 염려하지 않아도 된다.
  * getServerSideProps 사용시 getStaticProps함수명만 변경해주면 사용 가능하다. TTFB(Time to first byte)는 getStaticProps가 더 빠르다.
  * CSR을 고려한다면 SWR(캐싱/패칭) 추천. 
  * Dynamic Routes - getStaticPaths
  * fallback - false일 경우 404, true 이면 router.isFallback
  * 
