<html>
<head></head>
<body>
<h1>Introduce</h1>

<h3>#프로젝트 동기</h3>
<p>
처음엔 혼자 일하면서 여러 고충을 겪을 프리랜서에 대한 커뮤니티가 부족하다고 느껴 프리랜서 커뮤니티를 만들려고 했으나

혼자 일하는 사람들의 범위를 프리랜서, 크리에이터, 자영업자 커뮤니티로 확장했고 

혼자인 사람들이 점점 늘어나는 시대 상황에 맞춰서 혼자인 사람들을 위한 종합 커뮤니티로 최종 확장.
</p>

<br/>

<h3>#혼자당 - 대한민국에서 혼자인 모든 분들을 위한 커뮤니티 웹사이트</h3> 

<p>
혼자번당 - 혼자 버는 프리랜서, 크리에이터, 자영업자들을 위한 커뮤니티

혼자간당 - 혼자 여행가는 모든 분들을 위한 커뮤니티 등등

혼자인 사람들을 위한 커뮤니티 추가 예정
</p>

<br/>
<br/>

<h1>Result</h1>

<h3>#랜딩페이지</h3>

![001](https://user-images.githubusercontent.com/52643354/188816432-db4384a7-3100-43b6-a204-12463b9ad646.png)
![002](https://user-images.githubusercontent.com/52643354/188816436-0d87ce47-badf-4192-9f10-4fe4a12efa03.png)


<h3>#각 커뮤니티별 렌딩페이지</h3>

![003](https://user-images.githubusercontent.com/52643354/188816440-84ac247a-2686-4c82-b503-457d06cac7b1.png)
![004](https://user-images.githubusercontent.com/52643354/188816444-f5258eab-2870-4e40-a1d8-d190e9e2e1d7.png)

<h3>#커뮤니티 </h3>

![005](https://user-images.githubusercontent.com/52643354/188816448-5da66998-9ab2-4947-9110-2135456b87b2.png)
![006](https://user-images.githubusercontent.com/52643354/188816452-928bd3b1-a0b4-49dc-a33b-cf31130a3d6a.png)

<h3>#글/글쓰기 </h3>

![007](https://user-images.githubusercontent.com/52643354/188816456-54a57502-ce7f-4888-889a-e1d74441f164.png)
![008](https://user-images.githubusercontent.com/52643354/188816457-855e2821-1860-41ed-8520-6f8c9d70510e.png)


<br/>
<br/>

<h1>Process</h1>

<h3>#Environment</h3>
<p>
언어 : HTML, CSS, JavaScript 

Frontend : React

Backend : Firebase
</p>

<h3>#Build</h3>
<p>
React-Router-Dom 라이브러리를 이용해 URL별 페이지 구성.

각 기능별 최소단위를 컴포넌트로 만들어서 페이지를 조립하는 방식.

Fontend: 대부분의 기능을 React Hooks인 useState, useEffect, useNavigate와 컴포넌트간 데이터를 주고받을 수 있는 프로퍼티(Props)를 이용해 만들었음.

Backend: Nosql 구조지만 접근성이 매우 좋고 하루에 일정 사용량은 서버 비용없이 무료로 제공해주는 Firebase를 사용.
</p>

<h3>#Algorithm</h3>
<p>
커뮤니티에 접속했을 때 해당 커뮤니티에 대한 모든 글을 불러오면 서버 비용이 낭비.

따라서 글을 쓸때마다 직업별 카테고리에 번호를 1부터 순서대로 붙이고 

한 페이지당 글이 20개라 했을 때, 1페이지 클릭시 서버로부터 가장 번호가 큰 글부터 20개를 불러오고

20개의 글중에 가장 번호가 큰 첫번째 번호를 변수에 저장했다가 

2페이지 클릭시 해당 번호에서 20을 뺀 번호부터 또 다시 글 20개를 가져오는 구조.

</p>

<h3>#Function</h3>
<p>
<h4>1. 로그인</h4>
로그인시 고유의 닉네임을 설정할 수 있음. 

로그인 하지 않을 시 이름은 익명 + 랜덤 4자리 숫자로 구성, 새로고침시 계속 바뀜.

<h4>카테고리, 댓글, 인기, 공감, 다크모드, 내글보기,</h4>

<h3>#반응형 웹</h3>
<p>
미디어 쿼리를 이용해 1280px, 768px을 기준으로 스마트폰, 태블릿, 모니터로 나눠

화면 크기에 따라 페이지 구성이 바뀌는 반응형 웹으로 만들었음.
</p>

<br/>
<br/>

<h1>Plan</h1>

<p>
혼자인 사람들을 위한 다양한 커뮤니티 추가 예정.

앱으로 만들면 어울린다는 말을 많이 들어서 하이브리드 앱으로 만들지 고민중.

경영학과 친구와 같이 운영해볼 예정.
</p>

</body>
</html>



