import React, { memo, useEffect, useState, useCallback } from 'react';

import { useResponsive } from '../../hooks';

import TabList from '../../components/TabList';
import { QuestIcon } from '../../assets';

import { StyledTabHeader } from './styles';

const TabHeader = memo(({ tab, onTab }) => {
  const { isMobile } = useResponsive();

  return (
    <StyledTabHeader>
      {isMobile && (
        <button className="quest-button" type="button">
          <QuestIcon aria-hidden="true" />
          탐색
        </button>
      )}

      <TabList className="tab-list" tab={tab} role="tablist" onTab={onTab} />
    </StyledTabHeader>
  );
});

export default TabHeader;
