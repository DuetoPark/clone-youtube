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

const FilterWrapper = ({ className, id, filter }) => {
  return (
    <div className={className}>
      <h3 className="title">{getTitle(id)}</h3>

      <ol className="filter-list">
        {filter[id].map((item) => (
          <FilterItem key={item.id} className="filter-item" filter={item} />
        ))}
      </ol>
    </div>
  );
};

export default FilterWrapper;
