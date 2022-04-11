import React from 'react';

import MiniSidebar from '../../components/MiniSidebar';
import VideoList from '../../components/VideoList';
import TabHeader from './TabHeader';

import { StyledRecommendation } from './styles';

const VideoRecommendationPage = ({ menu, onMenu, videos, onVideo }) => {
  return (
    <main>
      <h1 className="visually-hidden">본문</h1>

      <MiniSidebar menu={menu} onMenu={onMenu} />

      <StyledRecommendation className="video-recommendation">
        <TabHeader />
        <VideoList videos={videos} onVideo={onVideo} />
      </StyledRecommendation>
    </main>
  );
};

export default VideoRecommendationPage;
