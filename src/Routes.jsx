import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route } from 'react-router';

import GlobalHeader from './components/GlobalHeader';
import Sidebar from './components/Sidebar';

import VideoRecommendationPage from './pages/VideoRecommendation';
import SearchResultPage from './pages/SearchResult';
import PlayerPage from './pages/PlayerPage';

import Modal from './app/modal';

const RouteWrapper = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState('');
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
  const sidebarTriggerRef = useRef();
  const sidebarCloseBtnRef = useRef();

  const sidebar = new Modal(
    sidebarRef.current,
    sidebarTriggerRef.current,
    sidebarCloseBtnRef.current
  );

  // ------------------
  // NOTE: Input Control
  // ------------------
  const removeInputText = useCallback(() => {
    inputRef.current.value = '';
    inputRef.current.focus();
  }, [inputRef]);

  // ------------------
  // NOTE: Page Control
  // ------------------
  const getPopularVideos = useCallback(() => {
    props.youtube
      .mostPopular() //
      .then((items) => setVideos((prev) => items));
  }, [props, setVideos]);

  const getSearchResult = useCallback(
    (event) => {
      event.preventDefault();

      props.youtube
        .search(inputRef.current.value) //
        .then((items) => {
          setVideos((prev) => items);
        });

      inputRef.current.blur();
    },
    [props, inputRef]
  );

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
    (target) => {
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

  const handleMenu = useCallback(
    (event) => {
      const target = event.target;
      changeMenuState(target);

      if (target.dataset.menu === 'gnb') return;

      props.youtube
        .mostPopular() //
        .then((items) => setVideos((prev) => items));

      sidebar.close();
    },
    [changeMenuState, props, sidebar]
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
  // NOTE: Video Control
  // ------------------
  const changeSeledtedVideo = useCallback(
    (video) => {
      setSelectVideo((prev) => video);
    },
    [setSelectVideo]
  );

  return (
    <React.Fragment>
      <GlobalHeader
        className="gnb"
        inputRef={inputRef}
        sidebar={sidebar}
        sidebarTriggerRef={sidebarTriggerRef}
        menuItems={menu.gnb}
        onHome={getPopularVideos}
        onSearch={getSearchResult}
        onButton={handleMenu}
        onInput={removeInputText}
      />

      <Routes>
        <Route
          path="/"
          element={
            <VideoRecommendationPage
              menu={menu}
              onMenu={handleMenu}
              videos={videos}
              onVideo={changeSeledtedVideo}
            />
          }
        ></Route>

        <Route
          path="/search"
          element={
            <SearchResultPage
              menu={menu}
              onMenu={handleMenu}
              videos={videos}
              onVideo={changeSeledtedVideo}
            />
          }
        ></Route>

        <Route
          path="/video"
          element={
            <PlayerPage
              selectVideo={selectVideo}
              videos={videos}
              onVideo={changeSeledtedVideo}
            />
          }
        ></Route>
      </Routes>

      <Sidebar
        sidebar={sidebar}
        sidebarRef={sidebarRef}
        sidebarCloseBtnRef={sidebarCloseBtnRef}
        menu={menu}
        onHome={getPopularVideos}
        onMenu={handleMenu}
      />
    </React.Fragment>
  );
};

export default RouteWrapper;
