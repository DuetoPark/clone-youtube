import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route } from 'react-router';

import GlobalHeader from './components/GlobalHeader';
import Sidebar from './components/Sidebar';

import VideoRecommendationPage from './pages/VideoRecommendation';
import SearchResultPage from './pages/SearchResult';
import VideoViewPage from './pages/VideoView';

const RouteWrapper = (props) => {
  const [videos, setVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [menu, setMenu] = useState({
    gnb: [
      { id: 1, category: 'upload', active: false },
      { id: 2, category: 'app', active: false },
      { id: 3, category: 'alert', active: false },
    ],
    main: [
      { id: 1, category: '홈', active: false },
      { id: 2, category: '탐색', active: false },
      { id: 3, category: 'Shorts', active: false },
      { id: 4, category: '구독', active: false },
      { id: 5, category: '보관함', active: false },
      { id: 6, category: '시청 기록', active: false },
      { id: 7, category: '내 동영상', active: false },
      { id: 8, category: '나중에 볼 동영상', active: false },
      { id: 9, category: '좋아요 표시한 동영상', active: false },
    ],
    popular: [
      { id: 1, category: '음악', active: false },
      { id: 2, category: '스포츠', active: false },
      { id: 3, category: '게임', active: false },
      { id: 4, category: '영화', active: false },
      { id: 5, category: '뉴스', active: false },
      { id: 6, category: '실시간', active: false },
      { id: 7, category: '학습', active: false },
      { id: 8, category: '360° 동영상', active: false },
    ],
    find: [{ id: 1, category: '채널 탐색' }],
    moreNotUser: [
      { id: 1, category: 'YouTube Primium' },
      { id: 2, category: '실시간' },
    ],
    moreUser: [
      { id: 1, category: 'YouTube Primium' },
      { id: 2, category: '영화', active: false },
      { id: 3, category: '게임', active: false },
      { id: 4, category: '실시간', active: false },
      { id: 5, category: '학습', active: false },
      { id: 6, category: '스포츠', active: false },
    ],
    service: [
      { id: 1, category: '설정' },
      { id: 2, category: '신고 기록' },
      { id: 3, category: '고객센터' },
      { id: 4, category: '의견 보내기' },
    ],
  });

  const inputRef = useRef();
  const sidebarRef = useRef();

  // ------------------
  // NOTE: Page Control
  // ------------------
  const getPopularVideos = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    let videoList;
    let channelIdList;
    let avatarImage = new Map();

    await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet&part=statistics&part=contentDetails&maxResults=25&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        videoList = [...data.items];

        channelIdList = videoList.map((item) => {
          const { channelId } = item.snippet;
          avatarImage.set(channelId, '');

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

          avatarImage.set(id, url);
        });

        const videos = videoList.map((item) => {
          const channelId = item.snippet.channelId;
          const avatarURL = avatarImage.get(channelId);
          return { ...item, avatarURL, channelId };
        });

        setVideos(videos);
      });
  }, []);

  const getSearchResult = useCallback(
    async (event) => {
      event.preventDefault();

      const value = inputRef.current.value;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      let videoList;
      let videoIdList;
      let channelIdList;
      let avatarImage = new Map();

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
            avatarImage.set(channelId, '');

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

            avatarImage.set(id, url);
          });

          const videos = videoList.map((item) => {
            const channelId = item.snippet.channelId;
            const avatarURL = avatarImage.get(channelId);
            return { ...item, avatarURL };
          });

          setVideos(videos);
        });

      inputRef.current.blur();
    },
    [inputRef]
  );

  const getVideoComments = (id) => {
    setCurrentVideoId(id);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&textFormat=plainText&videoId=${currentVideoId}&key=AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    getPopularVideos();
  }, [getPopularVideos]);

  useEffect(function changePageTitle() {
    const pathname = window.location.pathname;
    const titlePrefix = 'Youtube - ';

    switch (pathname) {
      case '/search':
        document.title = `${titlePrefix}Search`;
        break;
      case '/video':
        document.title = `${titlePrefix}Player`;
        break;
      default:
        document.title = `${titlePrefix}Home`;
        break;
    }
  });

  // ------------------
  // NOTE: Menu Control
  // ------------------
  const changeMenuState = useCallback(
    (event) => {
      const target = event.target;
      const { category, menu } = target.dataset || false;

      if (!category || !menu) return;

      setMenu((prevState) => {
        const newState = { ...prevState };

        const newMenu = prevState[menu].map((item) => {
          if (item.category === category) {
            return { ...item, active: !item.active };
          }
          return { ...item, active: item.active && false };
        });

        newState[menu] = newMenu;

        return newState;
      });
    },
    [setMenu]
  );

  const toggleHomeButton = useCallback(() => {
    const pathname = window.location.pathname;

    setMenu((prevState) => {
      const newState = { ...prevState };
      const newMain = prevState.main.map((item) => {
        if (item.category === '홈') {
          return { ...item, active: pathname === '/' ? true : false };
        } else {
          return item;
        }
      });

      newState.main = newMain;

      return newState;
    });
  }, [setMenu]);

  useEffect(() => {
    toggleHomeButton();
  }, [toggleHomeButton]);

  // ------------------
  // NOTE: Modal Control
  // ------------------
  const activeSidebar = useCallback(() => {
    sidebarRef.current.classList.add('is-active');
  }, [sidebarRef]);

  return (
    <React.Fragment>
      <GlobalHeader
        inputRef={inputRef}
        menuItems={menu.gnb}
        onHome={getPopularVideos}
        onSearch={getSearchResult}
        onButton={changeMenuState}
        onSidebar={activeSidebar}
      />

      <Routes>
        <Route
          path="/"
          element={
            <VideoRecommendationPage
              menu={menu}
              onMenu={changeMenuState}
              videos={videos}
              onPage={getVideoComments}
            />
          }
        ></Route>

        <Route
          path="/search"
          element={
            <SearchResultPage
              menu={menu}
              onMenu={changeMenuState}
              videos={videos}
              onPage={getVideoComments}
            />
          }
        ></Route>
        <Route path="/video" element={<VideoViewPage />}></Route>
      </Routes>

      <Sidebar
        sidebarRef={sidebarRef}
        menu={menu}
        onHome={getPopularVideos}
        onMenu={changeMenuState}
      />
    </React.Fragment>
  );
};

export default RouteWrapper;
