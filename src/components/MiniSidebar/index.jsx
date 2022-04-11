import React from 'react';
import MenuList from '../MenuList';

import { StyledMiniSidebar } from './styles';

const MiniSidebar = ({ className, menu, onMenu }) => {
  return (
    <StyledMiniSidebar className={className}>
      <h1 className="visually-hidden">간편메뉴</h1>

      <MenuList
        className="main-menu-list"
        menuType="main"
        menuItems={menu.main}
        onMenu={onMenu}
      />
    </StyledMiniSidebar>
  );
};

export default MiniSidebar;
