import React from 'react';

import Thumbnail from '../Thumbnail';
import VideoInfo from './VideoInfo';

import { StyledVideoCard } from './styles';

const VideoItem = (props) => (
  <li className="video-item">
    <StyledVideoCard className="video-card">
      <Thumbnail onPage={props.onPage} video={props.video} />
      <VideoInfo onPage={props.onPage} video={props.video} />
    </StyledVideoCard>
  </li>
);

export default VideoItem;
