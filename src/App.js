import React, { useState, useEffect, useCallback } from 'react';
import VideoList from './components/video-list/video-list';
import Logo from './assets/logo.svg';

function App() {
  const [mode, setMode] = useState('home');
  const [videos, setVideos] = useState([]);
  const inputRef = React.createRef();

  const handlePageMode = useCallback(
    (event) => {
      event.preventDefault();

      const target = event.currentTarget;
      const modeData = target.dataset.mode; // NOTE: 해당 콜백을 이벤트에 등록하려면 태그에 data-mode를 같이 선언해야 함.

      if (mode === modeData) return;
      setMode(modeData);
    },
    [mode]
  );

  const getPopularVideos = useCallback(() => {
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

  const getSearchResult = useCallback(
    (event) => {
      handlePageMode(event);

      const value = inputRef.current.value;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          let videoIdList = result.items.map((item) => `id=${item.id.videoId}`);

          fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?${videoIdList.join(
              '&'
            )}&part=snippet&part=statistics&part=contentDetails&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log('error', error));
        })
        .catch((error) => console.log('error', error));

      // video 모드 구현
      // 채널 썸네일
    },
    [handlePageMode, inputRef]
  );

  useEffect(() => {
    getPopularVideos();
  }, [getPopularVideos]);

  return (
    <React.Fragment>
      <header className="gnb">
        <h1 className="logo">
          <a href="./index.html" aria-label="홈">
            <img src={Logo} alt="유튜브 로고" />
          </a>
        </h1>

        <form
          className="search-form"
          onSubmit={getSearchResult}
          data-mode="search"
        >
          <input type="text" placeholder="검색" ref={inputRef} />
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

          <VideoList
            onPage={handlePageMode}
            data-mode="video"
            videos={videos}
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
