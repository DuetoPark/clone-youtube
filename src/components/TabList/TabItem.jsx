import React from 'react';

import { StyledTab } from './styles';

const TabItem = ({ className, tab }) => {
  return (
    <StyledTab className={className}>
      <button className="tab-button" type="button" data-category={tab.category}>
        {tab.category}
      </button>
    </StyledTab>
  );
};

export default TabItem;
