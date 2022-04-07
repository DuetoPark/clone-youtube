import React from 'react';
import MenuList from '../MenuList';

import { StyledMiniSidebar } from './styles';

const MiniSidebar = (props) => {
  return (
    <StyledMiniSidebar>
      <h1 className="visually-hidden">간편메뉴</h1>

      <MenuList
        menuType="main"
        menuItems={props.menu.main}
        onMenu={props.onMenu}
      />
    </StyledMiniSidebar>
  );
};

export default MiniSidebar;
