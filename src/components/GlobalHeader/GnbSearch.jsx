import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CloseIcon, SearchIcon } from '../../assets';
import { StyledGnbIconButton, StyledGnbSearch } from './styles';

const GnbSearch = (props) => {
  let navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      props.onSearch(event);
      navigate('/search');
    },
    [props, navigate]
  );

  return (
    <StyledGnbSearch onSubmit={handleSubmit} data-mode="search">
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
