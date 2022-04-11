import React, { memo } from 'react';

import { StyledTab } from './styles';

const TabItem = memo(({ className, tab }) => {
  return (
    <StyledTab className={className}>
      <button className="tab-button" type="button" data-category={tab.category}>
        {tab.category}
      </button>
    </StyledTab>
  );
});

export default TabItem;
