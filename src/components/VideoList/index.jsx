import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideo }) => {
  return (
    <ol className="video-list">
      {videos.map((video) => {
        return <VideoItem key={video.id} video={video} onVideo={onVideo} />;
      })}
    </ol>
  );
};

export default VideoList;
