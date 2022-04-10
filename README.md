## 🗂 File Setting

📦src  
┣ 📂assets ----------------- 아이콘 & 이미지  
┣ 📂components ------------- 컴포넌트 (styled-components)  
┣ 📂hooks ------------------ Custom Hooks  
┣ 📂styles  
┃ ┣ 📂utils ---------------- Global Utilities (Mixins)  
┃ ┗ 📜index.js ------------- Theme (CSS 변수)  
┣ 📜Routes.jsx  
┣ 📜globalStyles.js -------- CSS Reset Style  
┗ 📜index.jsx -------------- Theme & Reset Style 적용

## 🗄 Response

📌videos  
┣ 📎id  
┣ 📎contentDetails - duration  
┣ 📎snippet  
┃ ┣ title  
┃ ┣ channelId  
┃ ┣ publishedAt  
┃ ┣ channelTitle  
┃ ┣ discription  
┃ ┣ tags  
┃ ┗ thumbnail - default.url  
┗ 📎statistics - likeCount, commentCount, ViewCount

📌search  
┣ 📎id  
┣ 📎snippet  
┃ ┣ title  
┃ ┣ channelId  
┃ ┣ channelTitle  
┃ ┗ thumbnail - default.url  
┗ 📎publishedAt

📌channel  
┗ 📎snippet - channelId, thumbnail

- Search API : search ⏩ (videoId 사용) ⏩ video ⏩ (channelID 사용) ⏩ channel
- Video(popular) API: video ⏩ channel
