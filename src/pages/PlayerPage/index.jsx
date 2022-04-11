import React, { useState, useCallback } from 'react';

import { useResponsive } from '../../hooks';

import Player from './Player';
import TabList from '../../components/TabList';
import VideoList from '../../components/VideoList';

import { StyledMain } from './styles';

const PlayerPage = ({ selectVideo, videos, onVideo, tab, onTab }) => {
  const { isMobile } = useResponsive();

  return (
    <StyledMain>
      <div className="primary">
        <Player selectVideo={selectVideo} />
      </div>

      <div className="secondary">
        {isMobile && <h3 className="secondary-title">다음 동영상</h3>}
        {!isMobile && (
          <TabList
            className="tab-list"
            role="tablist"
            tab={tab}
            onTab={onTab}
          />
        )}

        <VideoList className="video-list" videos={videos} onVideo={onVideo} />
      </div>
    </StyledMain>
  );
};

export default PlayerPage;
