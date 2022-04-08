import React, { memo, useCallback, useEffect, useState } from 'react';

import { useResponsive } from '../../hooks';

import TabItem from './TabItem';
import { QuestIcon } from '../../assets';

import { StyledTabHeader } from './styles';

const TabHeader = memo((props) => {
  const { isMobile } = useResponsive();

  const [tab, setTab] = useState([
    { id: 1, category: '전체', active: false },
    { id: 2, category: '요리 프로그램', active: false },
    { id: 3, category: '피트니스', active: false },
    { id: 4, category: '만화 영화', active: false },
    { id: 5, category: '축구', active: false },
    { id: 6, category: '랩', active: false },
    { id: 7, category: '요리', active: false },
    { id: 8, category: '액션 어드벤처 게임', active: false },
    { id: 9, category: '반려동물', active: false },
    { id: 10, category: '시각 예술', active: false },
    { id: 11, category: '음악', active: false },
    { id: 12, category: '최근에 업로드된 동영상', active: false },
    { id: 13, category: '실시간', active: false },
    { id: 14, category: '믹스', active: false },
  ]);

  const [currentTab, setCurrentTab] = useState('');

  const handleTab = useCallback(
    (event) => {
      const target = event.target;
      const category = target.dataset.category;

      if (!category || currentTab === category) return;

      setTab((prevState) => {
        const newState = prevState.map((item) => {
          if (item.category === category) {
            return { ...item, active: true };
          } else {
            return { ...item, active: !item.active ? item.active : false };
          }
        });

        return newState;
      });

      setCurrentTab((prevState) => category);
    },
    [setTab, currentTab, setCurrentTab]
  );

  useEffect(function activeTotalButton() {
    setTab((prevState) => {
      const newState = prevState.map((item) => {
        if (item.category === '전체') {
          return { ...item, active: true };
        } else {
          return { ...item, active: !item.active ? item.active : false };
        }
      });

      return newState;
    });
  }, []);

  return (
    <StyledTabHeader>
      {isMobile && (
        <button className="quest-button" type="button">
          <QuestIcon aria-hidden="true" />
          탐색
        </button>
      )}

      <ol className="tab-list" onClick={handleTab} role="tablist">
        {tab.map((item) => (
          <TabItem key={item.id} tab={item} />
        ))}
      </ol>
    </StyledTabHeader>
  );
});

export default TabHeader;
