import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CloseIcon, SearchIcon } from '../../assets';
import { StyledGnbIconButton, StyledGnbSearch } from './styles';

const GnbSearch = ({ className, onSearch, onInput, inputRef, children }) => {
  let navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      onSearch(event);
      navigate('/search');
    },
    [onSearch, navigate]
  );

  return (
    <StyledGnbSearch className={className} onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="검색" ref={inputRef} />

        <StyledGnbIconButton
          className="gnb-icon-button delete-button"
          onClick={onInput}
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

      {children}
    </StyledGnbSearch>
  );
};

export default GnbSearch;
