import React, { memo } from 'react';

import { StyledTab } from './styles';

const TabItem = memo((props) => {
  return (
    <StyledTab
      className={`tab-item ${props.tab.active ? 'is-active' : ''}`}
      role="tab"
    >
      <button
        className="tab-button"
        type="button"
        data-category={props.tab.category}
      >
        {props.tab.category}
      </button>
    </StyledTab>
  );
});

export default TabItem;
