# ๐ YouTube clone page

| ๋ฆฌ์กํธ๋ก ๋ง๋  SPA YouTube ํด๋ก  ํ์ด์ง

### [๊ฐ๋ฐ๋ฐฐ๊ฒฝ](https://github.com/DuetoPark/clone-youtube/wiki/%EA%B0%9C%EB%B0%9C%EB%B0%B0%EA%B2%BD)

### [WIKI](https://github.com/DuetoPark/clone-youtube/wiki)

https://user-images.githubusercontent.com/69448900/163094834-474ac820-a58a-4e05-86d3-f5a054aad514.mov

## ๐ ์๋น์ค

### 1. ์ธ๊ธฐ ๋์์ ์ถ์ฒ

๋ฉ์ธ ํ์ด์ง๋ก ์ด๋ํ๋ฉด ๊ทธ ๋ ์ ์ธ๊ธฐ ๋์์ ๋ชฉ๋ก์ด ์ถ๋ ฅ

### 2. ๋์์ ๊ฒ์

Input์ ๊ฒ์์ด๋ฅผ ์๋ ฅํ๋ฉด ๊ฒ์์ด ๊ด๋ จ ๋์์ ๋ชฉ๋ก์ด ์ถ๋ ฅ

### 3. ๋์์ ํ๋ ์ด์ด

์์ฒญ์ ์ํ๋ ๋์์์ ํด๋ฆญํ๋ฉด iframe์ด ์ถ๋ ฅ

## ๐ก ๊ตฌ์กฐ

### 1. Main Page

- Mini Sidebar
- Tab Header
- Video List

### 2. Search Page

- Mini Sidebar
- Video List

### 3. Player Page

- Player
- Tab List
- Video List


## ๐ File Setting
```
๐ฆsrc  
โฃ ๐app -------------------- ํจ์  
โฃ ๐assets ----------------- ์์ด์ฝ & ์ด๋ฏธ์ง  
โฃ ๐components ------------- ์ปดํฌ๋ํธ (styled-components)  
โฃ ๐hooks ------------------ Custom Hooks  
โฃ ๐pages ------------------ Route Elemenets  
โฃ ๐styles  
โ โฃ ๐utils ---------------- Global Utilities (Mixins)  
โ โ ๐index.js ------------- Theme (CSS ๋ณ์)  
โฃ ๐Routes.jsx  
โฃ ๐globalStyles.js -------- CSS Reset Style  
โ ๐index.jsx
```

## ๐ ETC

### ์ ์๊ธฐ๊ฐ

- 2022.03.08 ~ 2022.04.13

### ์์ฌ์ด ์ 

- ์๋ก๊ณ ์นจ์ ํ๋ฉด 404 ์๋ฌ๊ฐ ๋ํ๋ฉ๋๋ค.  
   Route์ Link๋ฅผ ํตํด ํ์ด์ง ์ด๋์์ด URL์ ์กฐ์ํ๋๋ก ๊ตฌํํ๊ธฐ ๋๋ฌธ์,  
   ๋ฉ์ธ์ด ์๋ ํ์ด์ง์์ ์๋ก๊ณ ์นจ์ ํ๋ฉด url์ ํด๋น๋๋ resource๊ฐ ์์ผ๋ฏ๋ก ์๋ฌ๊ฐ ๋ฐ์ํฉ๋๋ค.  
   nginX๋ฅผ ์ฌ์ฉํ์ฌ, ์๋ก๊ณ ์นจ์ ํ๋๋ผ๋ index.html๋ก ์ด๋ํ๋๋ก ์กฐ์ํด์ผ ํฉ๋๋ค.

[ํ์ด์ง ๋ณด๊ธฐ ๋งํฌ](https://duetopark.github.io/clone-youtube/)
