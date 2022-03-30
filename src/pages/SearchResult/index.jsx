import React from 'react';

const SearchResultPage = (props) => {
  return (
    <main>
      <nav>메뉴바-search</nav>
      <div>
        필터
        {props.children}
      </div>
    </main>
  );
};

export default SearchResultPage;
