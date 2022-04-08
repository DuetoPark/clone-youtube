import React, { useCallback, useEffect, useRef, useState } from 'react';

import FilterWrapper from './FilterWrapper';
import { FilterIcon, FilterFilledIcon } from '../../assets';

import { StyledFilter } from './styles';

const Filter = (props) => {
  const [filter, setFilter] = useState({
    upload: [
      { id: 1, category: '지난 1시간', active: false },
      { id: 2, category: '오늘', active: false },
      { id: 3, category: '이번 주', active: false },
      { id: 4, category: '이번 달', active: false },
      { id: 5, category: '올해', active: false },
    ],
    type: [
      { id: 1, category: '동영상', active: false },
      { id: 2, category: '채널', active: false },
      { id: 3, category: '재생목록', active: false },
      { id: 4, category: '영화', active: false },
    ],
    length: [
      { id: 1, category: '4분 미만', active: false },
      { id: 2, category: '4~20분', active: false },
      { id: 3, category: '20분 초과', active: false },
    ],
    feature: [
      { id: 1, category: '실시간', active: false },
      { id: 2, category: '4K', active: false },
      { id: 3, category: 'HD', active: false },
      { id: 4, category: '자막', active: false },
      { id: 5, category: '크리에이티브 커먼즈', active: false },
      { id: 6, category: '360°', active: false },
      { id: 7, category: 'VR180', active: false },
      { id: 8, category: '3D', active: false },
      { id: 9, category: 'HDR', active: false },
      { id: 10, category: '위치', active: false },
      { id: 11, category: '구입한 항목', active: false },
    ],
    sort: [
      { id: 1, category: '관련성', active: false },
      { id: 2, category: '업로드 날짜', active: false },
      { id: 3, category: '조회수', active: false },
      { id: 4, category: '평점', active: false },
    ],
  });
  const [filterOpen, setFilterOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  const filterRef = useRef();
  const filterContentRef = useRef();

  const handleFilter = useCallback(() => {
    const filter = filterRef.current;
    filter.classList.toggle('is-open');
    setFilterOpen((prevState) => !prevState);
  }, [setFilterOpen]);

  const getIcon = useCallback(() => {
    return filterOpen ? (
      <FilterFilledIcon aria-hidden="true" />
    ) : (
      <FilterIcon aria-hidden="true" />
    );
  }, [filterOpen]);

  useEffect(() => {
    const filterContent = filterContentRef.current;
    const listHeight = [...filterContent.children].map(
      (item) => item.clientHeight
    );

    setMaxHeight((prevState) => Math.max(...listHeight));
  }, []);

  return (
    <StyledFilter className="filter" ref={filterRef} maxHeight={maxHeight}>
      <button
        className="filter-toggle-button"
        type="button"
        aria-label="필터 창 열기"
        onClick={handleFilter}
      >
        {getIcon()}
        필터
      </button>

      <div className="filter-content" ref={filterContentRef}>
        <h2 className="visually-hidden">필터 종류</h2>

        {Object.keys(filter).map((key) => (
          <FilterWrapper key={key} id={key} filter={filter} />
        ))}
      </div>
    </StyledFilter>
  );
};

export default Filter;
