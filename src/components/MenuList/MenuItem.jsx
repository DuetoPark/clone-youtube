import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import getIcon from '../../app/icon';

import { StyledMenuItem } from './styles';

const MenuItem = memo(({ className, menuType, category, active }) => {
  return (
    <StyledMenuItem className={className}>
      <Link
        className="menu"
        to="/"
        data-category={category}
        data-menu={menuType}
      >
        {getIcon(category, active)}
        {category}
      </Link>
    </StyledMenuItem>
  );
});

export default MenuItem;
