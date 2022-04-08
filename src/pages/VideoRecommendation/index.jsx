import React from 'react';

import MiniSidebar from '../../components/MiniSidebar';
import VideoList from '../../components/VideoList';
import TabHeader from './TabHeader';

import { StyledRecommendation } from './styles';

const VideoRecommendationPage = (props) => {
  return (
    <main>
      <h1 className="visually-hidden">본문</h1>

      <MiniSidebar menu={props.menu} onMenu={props.onMenu} />

      <StyledRecommendation className="video-recommendation">
        <TabHeader />
        <VideoList onPage={props.onPage} videos={props.videos} />
      </StyledRecommendation>
    </main>
  );
};

export default VideoRecommendationPage;
