import React from 'react';
import Thumbnail from '../thumbnail';
import VideoInfo from './VideoInfo';
import { StyledVideoCard } from './styles';

const VideoItem = (props) => (
  <li>
    <StyledVideoCard className="video-card">
      <Thumbnail onPage={props.onPage} video={props.video} />
      <VideoInfo onPage={props.onPage} video={props.video} />
    </StyledVideoCard>
  </li>
);

export default VideoItem;
