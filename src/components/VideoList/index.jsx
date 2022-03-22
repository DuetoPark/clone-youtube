import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  return (
    <ul>
      {props.videos.map((video) => {
        return <VideoItem key={video.id} onPage={props.onPage} video={video} />;
      })}
    </ul>
  );
};

export default VideoList;
