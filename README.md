# 🚀 YouTube clone page

| 리액트로 만든 SPA YouTube 클론 페이지

### [개발배경](https://github.com/DuetoPark/clone-youtube/wiki/%EA%B0%9C%EB%B0%9C%EB%B0%B0%EA%B2%BD)

### [WIKI](https://github.com/DuetoPark/clone-youtube/wiki)

https://user-images.githubusercontent.com/69448900/163094834-474ac820-a58a-4e05-86d3-f5a054aad514.mov

## 📌 소개

### 서비스

1. **인기 동영상 추천**  
   메인 페이지로 이동하면 그 날의 인기 동영상 목록이 출력
2. **동영상 검색**  
   Input에 검색어를 입력하면 검색어 관련 동영상 목록이 출력
3. **동영상 플레이어**  
   시청을 원하는 동영상을 클릭하면 iframe이 출력

### 아키텍쳐

- Front-end
  - UI 제작: React, Styled-components
  - HTTP API 통신: AXIOS
- Back-end: Node.js

### API

**YouTube Data APIs**

- 사용: Search list, Videos list, Channels list

**Popular**

> channels를 따로 요청하는 이유는 videos list에 채널의 thumbnails이 없기 때문입니다.

1. 요청 Popular Videos
2. 응답 Popular Videos
3. Videos list에서 channelID 추출, 배열에 저장
4. (channelID 배열 이용) 요청 channels
5. 응답 channels

**Search**

1. (input value 이용) 요청 Search
2. 응답 Search
3. Search list에서 videoId 추출, 배열에 저장
4. (videoID 배열 이용) 요청 Popular Videos
5. 응답 Popular Videos
6. Videos list에서 videoId만 추출, 배열에 저장
7. (channelID 배열 이용) 요청 channels
8. 응답 channels

## 🗂 File Setting

📦src  
┣ 📂app -------------------- 함수  
┣ 📂assets ----------------- 아이콘 & 이미지  
┣ 📂components ------------- 컴포넌트 (styled-components)  
┣ 📂hooks ------------------ Custom Hooks  
┣ 📂pages ------------------ Route Elemenets  
┣ 📂styles  
┃ ┣ 📂utils ---------------- Global Utilities (Mixins)  
┃ ┗ 📜index.js ------------- Theme (CSS 변수)  
┣ 📜Routes.jsx  
┣ 📜globalStyles.js -------- CSS Reset Style  
┗ 📜index.jsx

## 🔖 ETC

### 제작기간

- 2022.03.08 ~ 2022.04.13

### 아쉬운 점

- 새로고침을 하면 404 에러가 나타납니다.  
   Route와 Link를 통해 페이지 이동없이 URL을 조작하도록 구현했기 때문에,  
   메인이 아닌 페이지에서 새로고침을 하면 url에 해당되는 resource가 없으므로 에러가 발생합니다.  
   nginX를 사용하여, 새로고침을 하더라도 index.html로 이동하도록 조작해야 합니다.
