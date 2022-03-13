import React, { useState, useEffect } from 'react';
import VideoList from './components/video-list/video-list';

function App() {
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

  return <main>{<VideoList videos={videos} />}</main>;
}

export default App;
