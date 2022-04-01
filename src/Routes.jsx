import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router';

import GlobalHeader from './components/GlobalHeader';
import VideoList from './components/VideoList';

import VideoRecommendationPage from './pages/VideoRecommendation';
import SearchResultPage from './pages/SearchResult';
import VideoViewPage from './pages/VideoView';

const RouteWrapper = (props) => {
  const [videos, setVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const inputRef = React.createRef();

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

  const toggleButton = useCallback((callBackFunc, event) => {
    const target = event.target;

    if (!target.matches('.gnb-icon-button')) return;
    target.classList.toggle('is-active');

    callBackFunc && callBackFunc();
  }, []);

  useEffect(() => {
    getPopularVideos();
  }, [getPopularVideos]);

  return (
    <React.Fragment>
      <GlobalHeader
        onSearch={getSearchResult}
        inputRef={inputRef}
        onButton={toggleButton}
      />

      <Routes>
        <Route path="/" element={<VideoRecommendationPage />}></Route>
        <Route path="/search" element={<SearchResultPage />}></Route>
        <Route path="/video" element={<VideoViewPage />}></Route>
      </Routes>

      <div>
        <VideoList onPage={getVideoComments} videos={videos} />
      </div>
    </React.Fragment>
  );
};

export default RouteWrapper;
