import React from 'react';

const FilterItem = (props) => {
  return (
    <li className="filter-item">
      <button className="filter-button" type="button">
        {props.filter.category}
      </button>
    </li>
  );
};

export default FilterItem;
