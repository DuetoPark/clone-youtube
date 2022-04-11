import React from 'react';

import MiniSidebar from '../../components/MiniSidebar';
import VideoList from '../../components/VideoList';
import TabHeader from './TabHeader';

import { StyledRecommendation } from './styles';

const VideoRecommendationPage = ({
  menu,
  onMenu,
  videos,
  onVideo,
  tab,
  onTab,
}) => {
  return (
    <main>
      <MiniSidebar className="mini-sidebar" menu={menu} onMenu={onMenu} />

      <StyledRecommendation className="video-recommendation">
        <TabHeader tab={tab} onTab={onTab} />
        <VideoList videos={videos} onVideo={onVideo} />
      </StyledRecommendation>
    </main>
  );
};

export default VideoRecommendationPage;
