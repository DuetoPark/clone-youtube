import React, { memo, useCallback } from 'react';

import MenuItem from './MenuItem';

import { StyledMenuList } from './styles';

const MenuList = memo((props) => {
  const handleMenu = useCallback(
    (event) => {
      const changeMenuState = props.onMenu;
      const toggleButton = props.callBackFunc;
      changeMenuState(toggleButton.bind(null, event), event);
    },
    [props]
  );

  return (
    <StyledMenuList
      className={`${props.menuType}-menu-list`}
      onClick={handleMenu}
    >
      {props.menuItems.map((item) => {
        const { id, category, active } = item;

        return (
          <MenuItem
            key={id}
            className={`${props.menuType}-menu-item ${
              category === '홈' ? 'is-active' : ''
            }`}
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
