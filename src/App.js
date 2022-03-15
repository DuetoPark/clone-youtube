import React, { useState, useEffect } from 'react';
import VideoList from './components/video-list/video-list';
import Logo from './assets/logo.svg';

function App() {
  const [mode, setMode] = useState('home');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&maxResults=25&chart=mostPopular&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  function handlePageMode(event) {
    event.preventDefault();

    const target = event.currentTarget;
    const modeData = target.dataset.mode; // NOTE: 해당 콜백을 이벤트에 등록하려면 태그에 data-mode를 같이 선언해야 함.

    if (mode === modeData) return;

    setMode(modeData);
  }

  return (
    <React.Fragment>
      <header>
        <a className="logo" href="./index.html" aria-label="홈">
          <img src={Logo} alt="유튜브 로고" />
        </a>

        <form
          className="search-form"
          onSubmit={handlePageMode}
          data-mode="search"
        >
          <input type="text" placeholder="검색" />
          <button type="submit">검색</button>
        </form>
      </header>

      <main>
        <div>
          {
            {
              home: <nav>왼쪽 메뉴바</nav>,
              search: <nav>왼쪽 메뉴바</nav>,
              video: <section>iframe이랑 댓글</section>,
            }[mode]
          }
        </div>

        <div>
          {
            {
              home: <div>태그</div>,
              search: <div>필터</div>,
              video: <div>태그</div>,
            }[mode]
          }

          <ol onClick={handlePageMode} data-mode="video">
            비디오 리스트
          </ol>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
