import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route } from 'react-router';

import { useLocalStorage } from './hooks';

import GlobalHeader from './components/GlobalHeader';
import Sidebar from './components/Sidebar';
import VideoRecommendationPage from './pages/VideoRecommendation';
import SearchResultPage from './pages/SearchResult';
import PlayerPage from './pages/PlayerPage';

import Modal from './app/modal';

import { INITIAL_STATE } from './app/INITIAL_STATE';

const RouteWrapper = (props) => {
  const [videos, setVideos] = useLocalStorage('videos', INITIAL_STATE.videos);
  const [selectVideo, setSelectVideo] = useLocalStorage(
    'selectVideo',
    INITIAL_STATE.selectVideo
  );

  const [menu, setMenu] = useState(INITIAL_STATE.menu);
  const [currentTab, setCurrentTab] = useState('');
  const [tab, setTab] = useState(INITIAL_STATE.tab);

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

    window.scrollTo(0, 0);
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

      window.scrollTo(0, 0);
    },
    [props, inputRef]
  );

  useEffect(() => {
    if (window.location.pathname !== '/') return;
    getPopularVideos();
  }, [getPopularVideos]);

  useEffect(function changePageTitle() {
    const pathname = window.location.pathname;
    const titlePrefix = 'Youtube - ';

    switch (pathname) {
      case '/search':
        document.title = `${titlePrefix}Search`;
        break;
      case '/player':
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
      window.scrollTo(0, 0);
    },
    [setSelectVideo]
  );

  // ------------------
  // NOTE: Tab Control
  // ------------------

  const handleTab = useCallback(
    (event) => {
      const target = event.target;
      const category = target.dataset.category;

      if (!category || currentTab === category) return;

      const page = event.currentTarget.dataset.page;

      setTab((prevState) => {
        const newState = { ...prevState };

        const newPage = prevState[page].map((item) => {
          if (item.category === category) {
            return { ...item, active: !item.active };
          }
          return { ...item, active: item.active && false };
        });

        newState[page] = newPage;

        return newState;
      });

      setCurrentTab((prevState) => category);
    },
    [currentTab]
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
              tab={tab.home}
              onTab={handleTab}
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
          path="/player"
          element={
            <PlayerPage
              selectVideo={selectVideo}
              videos={videos}
              onVideo={changeSeledtedVideo}
              tab={tab.player}
              onTab={handleTab}
            />
          }
        ></Route>
      </Routes>

      <Sidebar
        className="sidebar"
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
