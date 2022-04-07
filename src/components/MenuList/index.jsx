import React, { memo, useCallback } from 'react';

import MenuItem from './MenuItem';

import { StyledMenuList } from './styles';

const MenuList = memo((props) => {
  return (
    <StyledMenuList
      className={`${props.menuType}-menu-list`}
      onClick={props.onMenu}
    >
      {props.menuItems.map((item) => {
        const { id, category, active } = item;

        return (
          <MenuItem
            key={id}
            className={`${active && 'is-active'}`}
            menuType={props.menuType}
            category={category}
            active={active}
          ></MenuItem>
        );
      })}
    </StyledMenuList>
  );
});

export default MenuList;
