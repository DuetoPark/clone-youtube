import React, { useEffect, useState } from 'react';

import Player from './Player';
import TabList from '../../components/TabList';
import VideoList from '../../components/VideoList';

import { StyledMain } from './styles';

const PlayerPage = (props) => {
  const [otherVideos, getOtherVideos] = useState([]);

  const [tab, setTab] = useState([
    { id: 1, category: '모두', active: false },
    { id: 2, category: '관련 콘텐츠', active: false },
    { id: 3, category: '실시간', active: false },
    { id: 4, category: '최근에 업로드된 동영상', active: false },
  ]);

  useEffect(() => {
    const { id } = props.video;
  });

  return (
    <StyledMain>
      <div className="primary">
        <Player video={props.video} />
      </div>

      <div className="secondary">
        <TabList tab={tab} setTab={setTab} />
        <VideoList onPage={props.onPage} videos={otherVideos} />
      </div>
    </StyledMain>
  );
};

export default PlayerPage;
