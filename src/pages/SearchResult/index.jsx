import React from 'react';

import MiniSidebar from '../../components/MiniSidebar';
import SearchResult from './SearchResult';

const SearchResultPage = ({ menu, videos, onMenu, onVideo }) => {
  return (
    <main>
      <MiniSidebar className="mini-sidebar" menu={menu} onMenu={onMenu} />

      <SearchResult
        className="search-result"
        videos={videos}
        onVideo={onVideo}
      />
    </main>
  );
};

export default SearchResultPage;
