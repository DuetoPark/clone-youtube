import React from 'react';

import TabItem from './TabItem';
import { usePathname } from '../../hooks';

import { StyledTabList } from './styles';

const TabList = ({ className, tab, onTab }) => {
  const { PN } = usePathname();
  return (
    <StyledTabList
      className={className}
      data-page={PN === '' ? 'home' : PN}
      onClick={onTab}
    >
      {tab.map((item) => (
        <TabItem
          key={item.id}
          className={`${item.active ? 'tab-item is-active' : 'tab-item'}`}
          role="tab"
          tab={item}
        />
      ))}
    </StyledTabList>
  );
};

export default TabList;
