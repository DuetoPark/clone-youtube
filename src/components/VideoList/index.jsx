import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  return (
    <ol className="video-list">
      {props.videos.map((video) => {
        return <VideoItem key={video.id} onPage={props.onPage} video={video} />;
      })}
    </ol>
  );
};

export default VideoList;
