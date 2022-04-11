import React from 'react';

import { useResponsive } from '../../hooks';

import VideoList from '../../components/VideoList';
import Filter from './Filter';

import { StyledSearchResult } from './styles';

const SearchResult = ({ className, videos, onVideo }) => {
  const { isMobile } = useResponsive();

  return (
    <StyledSearchResult className={className}>
      {!isMobile && <Filter />}

      <VideoList className="video-list" videos={videos} onVideo={onVideo} />
    </StyledSearchResult>
  );
};

export default SearchResult;
