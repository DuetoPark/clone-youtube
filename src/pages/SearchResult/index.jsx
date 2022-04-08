import React from 'react';

import { useResponsive } from '../../hooks';

import MiniSidebar from '../../components/MiniSidebar';
import VideoList from '../../components/VideoList';
import Filter from './Filter';

import { StyledSearchResult } from './styles';

const SearchResultPage = (props) => {
  const { isMobile } = useResponsive();

  return (
    <main>
      <h1 className="visually-hidden">본문</h1>

      <MiniSidebar menu={props.menu} onMenu={props.onMenu} />

      <StyledSearchResult className="search-result">
        {!isMobile && <Filter />}
        <VideoList onPage={props.onPage} videos={props.videos} />
      </StyledSearchResult>
    </main>
  );
};

export default SearchResultPage;
