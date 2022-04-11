import React from 'react';

const FilterItem = ({ className, filter }) => {
  return (
    <li className={className}>
      <button className="filter-button" type="button">
        {filter.category}
      </button>
    </li>
  );
};

export default FilterItem;
