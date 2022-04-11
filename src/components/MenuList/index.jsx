import React, { memo } from 'react';

import MenuItem from './MenuItem';

import { StyledMenuList } from './styles';

const MenuList = memo(({ className, menuType, menuItems, onMenu }) => {
  return (
    <StyledMenuList className={className} onClick={onMenu}>
      {menuItems.map((item) => {
        const { id, category, active } = item;

        return (
          <MenuItem
            key={id}
            className={`${active ? 'menu-item is-active' : 'menu-item'}`}
            menuType={menuType}
            category={category}
            active={active}
          ></MenuItem>
        );
      })}
    </StyledMenuList>
  );
});

export default MenuList;
