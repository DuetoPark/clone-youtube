import React from 'react';

import Thumbnail from '../Thumbnail';
import VideoInfo from './VideoInfo';

import { StyledVideoCard } from './styles';

const VideoItem = ({ video, onVideo }) => (
  <li className="video-item">
    <StyledVideoCard className="video-card">
      <Thumbnail className="thumbnail" video={video} onVideo={onVideo} />
      <VideoInfo video={video} onVideo={onVideo} />
    </StyledVideoCard>
  </li>
);

export default VideoItem;
