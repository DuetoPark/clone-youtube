import React, { useState, useEffect, useCallback } from 'react';

import VideoList from './components/VideoList';

import {
  Logo,
  MenuIcon,
  SearchIcon,
  AppIcon,
  AppFilledIcon,
  VoiceIcon,
  UploadIcon,
  UploadFilledIcon,
  BellIcon,
  BellFilledIcon,
  AuthIcon,
  MoreIcon,
} from './assets';

const Routes = (props) => {
  const [mode, setMode] = useState('home');
  const [videos, setVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('');

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

  const getPopularVideos = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    let videoList;
    let channelIdList;
    let channelImage = new Map();

    await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet&part=statistics&part=contentDetails&maxResults=25&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        videoList = [...data.items];

        channelIdList = videoList.map((item) => {
          const { channelId } = item.snippet;
          channelImage.set(channelId, '');

          return `id=${channelId}`;
        });
      });

    await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?${channelIdList.join(
        '&'
      )}&part=snippet&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        data.items.forEach((item) => {
          const { id } = item;
          const { url } = item.snippet.thumbnails.default;

          channelImage.set(id, url);
        });

        const videos = videoList.map((item) => {
          const channelId = item.snippet.channelId;
          const channelUrl = channelImage.get(channelId);
          return { ...item, channelUrl, channelId };
        });

        setVideos(videos);
      });
  }, []);

  const getSearchResult = useCallback(
    async (event) => {
      const value = inputRef.current.value;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      let videoList;
      let videoIdList;
      let channelIdList;
      let channelImage = new Map();

      handlePageMode(event);

      await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          videoIdList = data.items.map((item) => `id=${item.id.videoId}`);
        })
        .catch((error) => console.log('error', error));

      await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?${videoIdList.join(
          '&'
        )}&part=snippet&part=statistics&part=contentDetails&maxResults=25&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          videoList = [...data.items];

          channelIdList = videoList.map((item) => {
            const { channelId } = item.snippet;
            channelImage.set(channelId, '');

            return `id=${channelId}`;
          });
        })
        .catch((error) => console.log('error', error));

      await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?${channelIdList.join(
          '&'
        )}&part=snippet&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          data.items.forEach((item) => {
            const { id } = item;
            const { url } = item.snippet.thumbnails.default;

            channelImage.set(id, url);
          });

          const videos = videoList.map((item) => {
            const channelId = item.snippet.channelId;
            const channelUrl = channelImage.get(channelId);
            return { ...item, channelUrl };
          });

          setVideos(videos);
        });
    },
    [handlePageMode, inputRef]
  );

  // const getVideoComments = useCallback(
  //   (event, id) => {
  //     handlePageMode(event);
  //     setCurrentVideoId(id);

  //     const requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow',
  //     };

  //     fetch(
  //       `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&textFormat=plainText&videoId=${currentVideoId}&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
  //       requestOptions
  //     )
  //       .then((response) => response.json())
  //       .then((result) => console.log(result))
  //       .catch((error) => console.log('error', error));
  //   },
  //   [currentVideoId, handlePageMode]
  // );

  const getVideoComments = (event, id) => {
    handlePageMode(event);
    setCurrentVideoId(id);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&textFormat=plainText&videoId=${currentVideoId}&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    getPopularVideos();

    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';

    // const firstScriptTag = document.querySelector('script');
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // let player;
    // function onYouTubeIframeAPIReady() {
    //   player = new YT.Player('player', {
    //     height: '360',
    //     width: '640',
    //     videoId: 'M7lc1UVf-VE', // 여기 바꿔야 함.
    //     events: {
    //       onReady: onPlayerReady,
    //       onStateChange: onPlayerStateChange,
    //     },
    //   });
    // }

    // function onPlayerReady(event) {
    //   event.target.playVideo();
    // }

    // let done = false;
    // function onPlayerStateChange(event) {
    //   if (event.data === YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    //   }
    // }
    // function stopVideo() {
    //   player.stopVideo();
    // }
  }, [getPopularVideos]);

  return (
    <React.Fragment>
      <header className="gnb">
        <div className="gnb-left">
          {/* flex-direction : row-reverse */}
          <h1 className="logo">
            <a href="./index.html" aria-label="유튜브 홈">
              <Logo aria-hidden="true" />
            </a>
          </h1>

          <button
            className="gnb-icon-button is-menu sm-only"
            aria-label="메뉴 열기"
            type="button"
          >
            <MenuIcon aria-hidden="true" />
          </button>
        </div>

        <div className="gnb-right">
          <button
            className="gnb-icon-button is-search sm-only"
            aria-label="검색 창 열기"
            type="button"
          >
            <SearchIcon aria-hidden="true" />
          </button>

          <form
            className="search-form sm-hidden"
            onSubmit={getSearchResult}
            data-mode="search"
          >
            <div className="input-group">
              <input type="text" placeholder="검색" ref={inputRef} />

              <button
                className="gnb-icon-button is-search"
                aria-label="검색어 찾기"
                type="submit"
              >
                <SearchIcon aria-hidden="true" />
              </button>
            </div>

            <button
              className="gnb-icon-button is-voice"
              aria-label="음성으로 검색하기"
              type="button"
            >
              <VoiceIcon aria-hidden="true" />
            </button>
          </form>

          {/* NOTE: 로그인을 한 경우 */}
          <div className="button-group sm-only">
            <button
              className="profile-button"
              aria-label="프로필 메뉴 열기"
              type="button"
            ></button>
          </div>

          <div className="button-group sm-hidden">
            <button
              className="gnb-icon-button is-upload"
              aria-label="업로드 메뉴 열기"
              type="button"
            >
              <UploadIcon aria-hidden="true" />
              {/* NOTE: is-active 일 때,*/}
              <UploadFilledIcon aria-hidden="true" />
            </button>

            <button
              className="gnb-icon-button is-app"
              aria-label="유튜브 앱 메뉴 열기"
              type="button"
            >
              <AppIcon aria-hidden="true" />
              {/* NOTE: is-active 일 때,*/}
              <AppFilledIcon aria-hidden="true" />
            </button>

            <button
              className="gnb-icon-button is-alert"
              aria-label="알림 메뉴 열기"
              type="button"
            >
              <BellIcon aria-hidden="true" />
              {/* NOTE: is-active 일 때, */}
              <BellFilledIcon aria-hidden="true" />
            </button>

            <button
              className="profile-button"
              aria-label="프로필 메뉴 열기"
              type="button"
            ></button>
          </div>

          {/* NOTE: 로그인을 하지 않은 경우 */}
          <div className="button-group sm-only">
            <button
              className="gnb-icon-button is-auth"
              aria-label="로그인"
              type="button"
            >
              <AuthIcon aria-hidden="true" />
            </button>
          </div>

          <div className="button-group sm-hidden">
            <button
              className="gnb-icon-button is-app"
              aria-label="유튜브 앱 메뉴 열기"
              type="button"
            >
              <AppIcon aria-hidden="true" />
              {/* NOTE: is-active 일 때, */}
              <AppFilledIcon aria-hidden="true" />
            </button>

            <button
              className="gnb-icon-button is-setting"
              aria-label="설정 열기"
              type="button"
            >
              <MoreIcon aria-hidden="true" />
            </button>

            <button className="gnb-icon-button is-auth" type="button">
              <AuthIcon aria-hidden="true" />
              로그인
            </button>
          </div>
        </div>
      </header>

      <main>
        <div>
          {
            {
              home: <nav>왼쪽 메뉴바</nav>,
              search: <nav>왼쪽 메뉴바</nav>,
              video: (
                <section>
                  video player, comments
                  <div id="player"></div>
                </section>
              ),
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
            onPage={getVideoComments}
            data-mode="video"
            videos={videos}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Routes;
