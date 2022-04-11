import React, { useState } from 'react';

import { useResponsive } from '../../hooks';

import Player from './Player';
import TabList from '../../components/TabList';
import VideoList from '../../components/VideoList';

import { StyledMain } from './styles';

const PlayerPage = ({ selectVideo, videos, onVideo }) => {
  const { isMobile } = useResponsive();

  const [tab, setTab] = useState([
    { id: 1, category: '모두', active: true },
    { id: 2, category: '관련 콘텐츠', active: false },
    { id: 3, category: '실시간', active: false },
    { id: 4, category: '최근에 업로드된 동영상', active: false },
  ]);

  return (
    <StyledMain>
      <div className="primary">
        <Player selectVideo={selectVideo} />
      </div>

      <div className="secondary">
        {isMobile && <h3 className="secondary-title">다음 동영상</h3>}
        {!isMobile && <TabList tab={tab} setTab={setTab} />}

        <VideoList videos={videos} onVideo={onVideo} />
      </div>
    </StyledMain>
  );
};

export default PlayerPage;
