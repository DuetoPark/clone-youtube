import React from 'react';

import Thumbnail from '../Thumbnail';
import VideoInfo from './VideoInfo';

import { StyledVideoItem } from './styles';

const VideoItem = ({ className, video, onVideo }) => (
  <StyledVideoItem className={className}>
    <article className="video-card">
      <Thumbnail className="thumbnail" video={video} onVideo={onVideo} />

      <VideoInfo className="video-info" video={video} onVideo={onVideo} />
    </article>
  </StyledVideoItem>
);

export default VideoItem;
