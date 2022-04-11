import React from 'react';

import { useResponsive } from '../../hooks';

import MiniSidebar from '../../components/MiniSidebar';
import VideoList from '../../components/VideoList';
import Filter from './Filter';

import { StyledSearchResult } from './styles';

const SearchResultPage = ({ menu, videos, onMenu, onVideo }) => {
  const { isMobile } = useResponsive();

  return (
    <main>
      <MiniSidebar menu={menu} onMenu={onMenu} />

      <StyledSearchResult className="search-result">
        {!isMobile && <Filter />}
        <VideoList videos={videos} onVideo={onVideo} />
      </StyledSearchResult>
    </main>
  );
};

export default SearchResultPage;
