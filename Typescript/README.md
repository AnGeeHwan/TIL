# TypeScript

``` typescript
type Centimeter = number

let height: Centimeter = 172
```

변수의 타입을 정의하는 것을 뛰어넘어 더 풍성하고 명확하게 데이터 타입을 표현할 수 있다.


## dist
이 디렉토리는 타입스크립트 컴파일러가 타입스크립트로 변환한 결과를 출력해 놓은 타겟 디렉토리

### sourceMap
타입스크립트 사용시 자바스크립트로 실행되는 것들을 타입스크립트로 변환하여 컴파일하는데 이렇게 변환된 파일이 아닌 개발환경과 실행환경을 일치시킬 수 있는 설정

## 제네릭
호출하는 쪽에서 유형을 명시해주면 그 유형을 받아서 그대로 반환유형으로 사용하겟다
```typescript
function getData<T>(url: string): T {
  ajax.open("GET", url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

newsFeed = store.feeds = makeFeeds(getData<NewsFeed[]>(NEWS_URL));
```
