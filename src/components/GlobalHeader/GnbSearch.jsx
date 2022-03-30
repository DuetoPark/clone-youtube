import React from 'react';

import { CloseIcon, SearchIcon } from '../../assets';
import { StyledGnbIconButton, StyledGnbSearch } from './styles';

const GnbSearch = (props) => {
  return (
    <StyledGnbSearch onSubmit={props.onSearch} data-mode="search">
      <div className="input-group">
        <input type="text" placeholder="검색" ref={props.inputRef} />

        <StyledGnbIconButton
          className="gnb-icon-button delete-button"
          aria-label="검색어 삭제"
          type="button"
        >
          <CloseIcon className="ic-delete" aria-hidden="true" />
        </StyledGnbIconButton>

        <StyledGnbIconButton
          className="gnb-icon-button search-button"
          aria-label="검색어 찾기"
          type="submit"
        >
          <SearchIcon aria-hidden="true" />
        </StyledGnbIconButton>
      </div>

      {props.children}
    </StyledGnbSearch>
  );
};

export default GnbSearch;
