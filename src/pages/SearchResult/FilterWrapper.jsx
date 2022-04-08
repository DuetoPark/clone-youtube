import React from 'react';

import FilterItem from './FilterItem';

function getTitle(text) {
  switch (text) {
    case 'upload':
      return '업로드 날짜';
    case 'type':
      return '구분';
    case 'length':
      return '길이';
    case 'feature':
      return '기능별';
    case 'sort':
      return '정렬기준';
    default:
      break;
  }
}

const FilterWrapper = (props) => {
  return (
    <div className="filter-wrapper">
      <h3 className="title">{getTitle(props.id)}</h3>

      <ol className="filter-list">
        {props.filter[props.id].map((item) => (
          <FilterItem key={item.id} filter={item} />
        ))}
      </ol>
    </div>
  );
};

export default FilterWrapper;
