import React, { memo } from 'react';

const FilterItem = memo(({ className, filter }) => {
  return (
    <li className={className}>
      <button className="filter-button" type="button">
        {filter.category}
      </button>
    </li>
  );
});

export default FilterItem;
