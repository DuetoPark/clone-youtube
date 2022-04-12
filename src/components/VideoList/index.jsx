import React, { memo } from 'react';
import VideoItem from './VideoItem';

const VideoList = memo(({ className, videos, onVideo }) => {
  return (
    <ol className={className}>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id}
            className="video-item"
            video={video}
            onVideo={onVideo}
          />
        );
      })}
    </ol>
  );
});

export default VideoList;
