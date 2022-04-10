import React, { useCallback, useState } from 'react';

import TabItem from './TabItem';

import { StyledTabList } from './styles';

const TabList = (props) => {
  const [currentTab, setCurrentTab] = useState('');

  const handleTab = useCallback(
    (event) => {
      const target = event.target;
      const category = target.dataset.category;

      if (!category || currentTab === category) return;

      props.setTab((prevState) => {
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
    [props, currentTab, setCurrentTab]
  );
  return (
    <StyledTabList className="tab-list" onClick={handleTab} role="tablist">
      {props.tab.map((item) => (
        <TabItem key={item.id} tab={item} />
      ))}
    </StyledTabList>
  );
};

export default TabList;
