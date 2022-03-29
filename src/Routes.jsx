import React, { useState, useEffect, useCallback } from 'react';

import GlobalHeader from './components/GlobalHeader';
import VideoList from './components/VideoList';

const Routes = (props) => {
  const [mode, setMode] = useState('home');
  const [videos, setVideos] = useState([]);
  // const [, setVideos] = useState([]);
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
      const value = inputRef.current.value;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      let videoList;
      let videoIdList;
      let channelIdList;
      let avatarImage = new Map();

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
    [handlePageMode, inputRef]
  );

  const getVideoComments = (event, id) => {
    handlePageMode(event);
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

  return (
    <React.Fragment>
      <GlobalHeader onSearch={getSearchResult} inputRef={inputRef} />
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
