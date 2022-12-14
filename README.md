# 항해 99 9기 4조 실전 프로젝트 - Status!

![브로셔](https://user-images.githubusercontent.com/86880916/206968459-29afd585-0182-40a0-baeb-624c45adce27.png)

---

### 📖 프로젝트 소개

> [statUs] 원활한 팀 업무와 팀 내 커뮤니케이션을 도와주는 서비스
>
> 팀의 일정을 확인한다!
> 누가 어떤 일정이 있는지 확인한다!
> 팀원이 어떤 상태인지 보여준다! <br/>
>
> 🚌 [Status 서비스 이용하기](https://www.status.gift/) <br />
> 🗒 [Status 노션 바로가기](https://obsidian-pig-183.notion.site/statUs-d2e9ed521e204b79ab20263e8823e744) <br />

### 🗓️ 프로젝트 운영 기간

- 개발 기간: 2022년 11월 11일 ~ 2022년 12월 16일
- 운영 기간: 2022년 12월 07일 ~ 2022년 12월 15일

---

### 👥 프론트엔드 팀원 소개

👨🏻‍💻 한세준: [https://github.com/hansejun](https://github.com/hansejun)

👨🏻‍💻 안치영: [https://github.com/Returnmakdo](https://github.com/Returnmakdo)

### 👥 백엔드 팀원 소개

👨🏻‍💻 김정현: [https://github.com/1005jh](https://github.com/1005jh)

👨🏻‍💻 정현진: [https://github.com/hyunjin9603](https://github.com/hyunjin9603)

👨🏻‍💻 유동희: [https://github.com/donghee44](https://github.com/donghee44)

### 👥 디자이너

👨🏻‍💻 문예진

---

### 💚 **주요 기능**

- ## **회원가입 및 로그인** <br>

  - 이메일 인증을 통한 회원가입
  - 카카오 로그인을 통한 간편한 회원가입 및 로그인 기능
  - 로그인 시 가장 최근에 접속한 그룹 페이지로 이동
  <hr/>

- ## **캘린더 및 상태등록** <br>

  - 상태에 대한 색상을 등록하여 일정 작성 ex) 휴가중, 연차, 출장 등...
  - 작성한 회원이 아닐 시 수정 불가
  - 드래그앤드롭을 통한 일정 수정
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207003947-b7e3d38b-98ba-454d-ab3d-c4145e578d81.gif" width="80%"  >

- ## **게시판** <br>

  - 자유게시판과 공지게시판으로 나누어 보여줌
  - 자유게시판에 게시글을 등록하여 공지게시판으로 이동 가능
  - 좋아요 및 댓글 작성 가능
  - 작성한 글은 요약된 정보로 보여지며 클릭을 통해 상세 게시글 모달을 확인 가능
  - 상세 게시글 모달에서는 게시글에 대한 전체 정보가 보여지며 이미지 클릭을 통해 상세 이미지를 슬라이드로 확인 가능
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207004487-dbe8b405-36b8-437f-ba31-df96dc546937.gif" width="80%"  >
    <img src="https://user-images.githubusercontent.com/86880916/207005646-dbc2c0b1-abec-4179-a933-da0be2b7872f.gif" width="80%">

- ## **그룹 회원 상태** <br>

  - 속한 그룹내에서 상태메시지와 상태 아이콘 등록 가능
  - 상태 아이콘은 유저의 오른쪽에 표시되며 마우스를 올려놓을 시에 해당 유저의 상태 메시지 확인 가능
  - 해당 그룹의 접속하고 있는 유저들을 실시간으로 표시
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207005834-2d2914be-6813-4d06-94c4-602e509f5e04.gif" width="80%">

- ## **그룹 생성 및 초대** <br>

  - 그룹에서 유저 초대 가능
  - 오른쪽 상단의 알림 아이콘을 클릭하면 받은 초대 목록을 보여줌
  - 초대 수락시에 해당 그룹으로 이동
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207005907-78edce7f-c10e-433b-a574-59eb99db9de8.gif" width="80%">
    <img src="https://user-images.githubusercontent.com/86880916/207006002-e4cf1c35-322a-4fad-9988-321a5325b688.gif" width="80%">

- ## **실시간 채팅** <br>
  - 그룹내의 유저와 실시간 1대1 채팅
  - 상대방이 메시지를 읽지 않았을 경우 상대방의 화면에서 읽지 않은 메시지 수 표시
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207006068-77bb8920-8ed6-4149-8635-363c3fc25d6e.gif" width="80%">

---

### ✅ **담당 작업**

👷🏻‍♂️ 한세준

- 레이아웃: 레이아웃, 글로벌 스타일, 애니메이션 효과
- 그룹 구현: 그룹 생성/수정/삭제, 그룹 초대
- 그룹 유저 : 상태 메시지 및 상태 아이콘, 프로필 변경
- 소켓 : 실시간 채팅 / 안읽은 메시지 알림 / 실시간 접속 유저 표시
- 필요한 util 함수 제작 : token 디코드, 쿠키 여부, 시간 관련 함수

👷🏻‍♂️ 안치영

- 로그인, 회원가입 : 유효성 검증, 이메일을 통한 인증 확인, 소셜로그인
- 캘린더 구현 : 상태 생성/수정/삭제, 일정 생성/수정/삭제, 드래그앤드롭
- 게시판 구현 : 게시글 생성/수정/삭제, 댓글 생성/수정/삭제, 좋아요. 상세페이지, 상세 이미지, 이미지 슬라이드
- 예외처리 : 예외에 대한 alert 작업
- 배포 : Vercel을 통한 배포

---

### 💬 기술적 의사결정

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/>&nbsp;
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>&nbsp;
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/-react--query-red?style=for-the-badge&logo=React Query&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/-Recoil-blueviolet?style=for-the-badge&logo=Recoil&logoColor=white">
<br>

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white">

| 사용 기술           | 기술 결정 이유                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Socket.io`         | webSocket의 경우 브라우저 별로 지원 버전이 다르거나 지원하지 않는 경우도 있어서 일관된 서비스를 제공하기 위해서 socket.io를 적용하였습니다.                                                                                                                                                                                                                                                                                                                 |
| `React-Query`       | 서버 데이터를 캐싱하고 데이터 패칭 시, 로딩 및 에러처리가 쉽게 가능하고 별도의 설정없이 즉시 사용이 가능하며, 여러번의 요청이 있을 시 중복을 제거해주는 등의 기능을 가지고 있습니다.<br><br>장점으로는 데이터가 오래되었다고 판단하면 자동으로 데이터를 최신화하며, 비동기 과정을 선언적으로 관리할 수 있고, 추가적으로 Redux-Thunk를 사용할 시 불필요한 BoilerPlate코드가 반복되는 것에 비해 불필요한 코드가 매우줄기 때문에 React-Query를 선택하였습니다. |
| `Recoil`            | 상태 관리 라이브러리로 React의 useState 훅과 비슷하게 동작하여 직관적이면서 간단한 구조를 가지고 있습니다.<br><br> 대규모 상태를 관리해야하는 프로젝트라면 redux를 사용하는 것이 적합하다는 생각이 들지만 현재 프로젝트 규모에서는 대규모 데이터를 다루는 것도 아니고, Redux에 비해 상대적으로 적은 코드를 사용하는 recoil을 선택하였습니다.                                                                                                                |
| `Axios`             | response timeout (fetch에는 없는 기능) 처리 방법이 존재<br>Promise 기반으로 만들어졌기 때문에 데이터를 다루기 편리합니다.<br>브라우저 호환이 fetch보다 뛰어나기 때문에 웹 앱을 염두한 곰곰 서비스에 적합하다고 생각했습니다.                                                                                                                                                                                                                                |
| `Styled components` | CSS를 컴포넌트 단위로 쪼갤수 있어 사용 빈도가 높은 CSS를 재사용할 수 있고, CSS SCSS와 달리 전역적인 관리를 하지 않아도 되기 때문에 유지 보수에 용이하다는 장점때문에 선택하였습니다.                                                                                                                                                                                                                                                                        |
| `Vercel`            | FrontEnd 호스팅 사이트로서 복잡한 절차없이 GitHub 레포지토리를 이용하여 빠른 배포가 가능 하다는 장점이 있어 선택하였습니다.                                                                                                                                                                                                                                                                                                                                 |

---

### 🔥트러블슈팅

<details>
<summary>  채팅 state의 초기화 </summary>
<br>

❓ 문제

- 페이지를 이동해도 채팅에 데이터를 담은 state가 사라지지 않음
- React-Query를 통해 기존에 주고 받은 채팅 내역(서버 데이터)을 불러와 state에 담는다.
- 소켓을 통해 실시간으로 주고 받는 데이터도 state에 담는다.
- roomId (params) 이동 시에 react-query는 params에 맞는 새로운 데이터를 불러오지만 state는 이전 채팅방에서 나눈 데이터가 그대로 남는다.
- 채팅데이터(서버로부터 받은 채팅 데이터) => 채팅 state에 담는 방식

1️⃣ 1차 접근

- 컴포넌트를 분리시켜 하위 컴포넌트에 채팅 state를 생성하고 서버데이터(useQuery)를 props로 내려주면 params가 변경될 때마다 자연스럽게 리렌더링이 발생해 state가 초기화 될것이라고 생각.
- 하지만 state가 그대로 남아있는 현상은 그대로.

2️⃣ 2차 접근

- useEffect()를 통해 언마운트 되었을 때 클린업 함수로 채팅에 대한 state 값을 초기화하면 될 것이라고 생각. 하지만 화면상 채팅 데이터가 하나도 보이지 않게 됨.

3️⃣ 3차 접근

- 마운트 되었을 때 state값을 초기화 시키고 채팅 데이터(서버데이터)를 가져오는데 성공했다면 그때 state에 넣어주면 된다고 생각.
- 하지만 위와 같이 채팅 데이터가 보이지 않는건 마찬가지.
- 그렇다면 비동기에 따른 실행 순서에 문제가 있다고 판단 setTimeout()을 이용해서 서버데이터를 state에 담아주는 시간을 조금 늦춰봄.
- 성공적이었으나 약간의 시간차이 때문에 사용자의 입장에서 불편함을 느낄 수 있어 실패로 간주.

❗️ 해결

- 무한 스크롤을 위해 생성해둔 pages란 state 값을 useEffect의 의존성 배열에 넣고 언마운트 되었을 때 pages를 0으로 초기화. ( pages는 1이 추가될 때마다 해당 페이지의 채팅 값을 불러오는 역할)
- useEffect에서 조건문을 통해 pages가 0이면서 query data가 있을 경우에는 query data를 넣어주고 query data가 없는 경우에는 빈배열을 넣어주니 해결
- 채팅방 나감(pages를 초기화) ⇒ 채팅방 입장(서버 데이터 가져옴) ⇒ 서버 데이터와 pages에 대한 조건문을 통한 채팅 state 업데이트

</details>
<br>
<details>
<summary> 로그인 유저 인식 문제 </summary>
<br>

❓ 문제

- 이전 로그인 계정 A , 현재 로그인 계정 B가 있다.
- B로 로그인하였을 때 새로고침을 하기 전까지는 A의 계정이라고 서버에서 인식을하고
- A의 계정정보를 보내주는 문제가 발생

1️⃣ 접근

- 처음에는 서버의 문제라고 생각하여 로그인하였을 때 response로 받는 유저의 Id와 토큰을 확인해보았으나 현재 로그인 계정 B에 대한 id와 토큰인 것을 확인함.
- 그럼 다음으로 생각해볼것은 useQuery의 캐싱 문제가 있는지 혹은 서버의 인증 미들웨어에 문제가 있는지 확인해보기로 결정.
- 우선 서버에서 토큰을 통해 어떤 유저로 인식하고 있는가를 확인하였는데 이전 로그인 계정 A의 토큰으로 인식.
- 그렇다면 서버에서는 문제가 없고 A의 데이터를 가져오는 useQuery도 문제가 없다고 판단.
- 로그인할때마다 토큰은 계속해서 최신화가 되고 있음에도 새로고침 이전까지는 이전 계정의 토큰이 전송되고 있기 때문에 “새로고침”이라는 키워드에 집중해보기로 함.
- 로그인이 되었을 때 navigate(”/”)로 홈페이지 이동을 시켰는데 이 앞 혹은 뒤에 window.location.reload()와 같은 새로고침 코드를 추가로 넣어준다면 될 것이라고 생각하였지만 실패.

❗️ 해결

- naviagate는 history가 남지만 replace는 history가 남지 않는다는 점을 확인해 로그인 성공시에 navigate(”/”)가 아닌 window.location.replace(”/”)로 변경하여 해결.

</details>
<br>
<details>
<summary> 파일리스트를 서버에 전송 </summary>
<br>

❓ 문제

- 하나의 이미지 파일을 보냈을 때는 서버에서 req.file을 통해 받아오는데 성공 했지만 여러개의 이미지 파일을 보냈을 때는 서버에서 req.files를 통해 받아오지 못하는 상황 직면.
- 기존 방식은 formData를 생성하지 않고 요청에 headers를 "multipart/form-data” 로 설정하여 {image:file}을 전송했지만 {image:fileList}로 전송할 경우 ㅈarr.forEach arr은 배열이 아니라는 에러가 발생.

1️⃣ 1차 접근

- 이미지를 담는 images라는 state 를 만들어 이미지를 추가할때마다 state 에 추가.
- 서버에서는 배열 형태로 이미지들을 받아야한다고 생각했기 때문에 `{image:images}`로 전달 → 실패함.

`실패이유`
FileList 형태가 아닌 `[file,file,file]` 형태이기 때문에 서버에서 `req.files`로 인식불가

❗️ 해결

- formData 객체를 생성해 state 에 반복문을 통해 append(”image”,state[i])로 추가하여 서버에 전달 성공

</details>
<br>

<details>
<summary> 다른 유저의 일정 업데이트 </summary>
<br>

❓ 문제

- 본인의 일정이 아닌 다른 사람의 drag&drop을 통한 업데이트를 시도했을 때 DB변화는 없지만 프론트단에서는 새로고침 하기 이전에는 실행되는것처럼 보여지는 현상이 발생.
- 강제적인 optimistic ui

1️⃣ 1차 접근

- 상대방의 일정을 drag&drop을 통해 업데이트할 때 해당 일정의 userId를 가져와서 현재 로그인되어있는 userId와 일치하지 않다면 업데이트 함수를 실행하지 않는 방법으로 시도했으나 실패
- 캘린더를 라이브러리로 구현했는데, 라이브러리 자체 속성에 dragToMove와 dragToResize라는 업데이트 관련 속성이 true값으로 고정되어있어, 화면상 업데이트가 무조건 실행이 되게 되어있음

2️⃣ 2차 접근

- dragToMove와 dragToResize라는 속성에 삼항연산자를 사용해서 userId가 맞지않다면 값을 바꿔보기로 시도했으나 실패
- 두 속성들은 Component return 부분에 속해있어서 drag&drop이나 resizing할 일정의 userId를 가져올 방법이 없음

3️⃣ 3차 접근

- 그렇다면 변경된 데이터가 화면상에서만 보일뿐 DB에는 저장되지 않으니, drag&drop 과 resizing 하는 함수에 전체 일정의 data인 myEvents라는 state를 useQuery에서 가져온 data로 setState를 해줘서 프론트단의 일정도 원래대로 돌아오게 끔 시도했으나 실패
- setState를 해준 후 data를 콘솔에 찍어봤을 때 일정의 시작 날짜와 끝나는 날짜 자체가 DB에 적용되기 전 라이브러리 자체의 수정된 데이터로 들어오게 되서 실패함

❗️ 해결

- 오류 테스트하던 중 발견했던 새로고침을 했을 때 프론트단에서도 원래대로 데이터가 돌아오는 것을 확인
- drag&drop 과 resizing하는 함수에 해당 일정의 userId와 현재 로그인한 유저의 userId가 같지않다면 useQuery에서 가져온 refetch를 실행하는 로직으로 해결 완료
- 라이브러리상 화면상 수정을 막을 방법이 없기에 화면 수정 => 아이디가 일치하지 않는다면 새롭게 서버로부터 데이터를 요청 => state를 최신화

</details>
