import React from 'react';

const VideoRecommendationPage = (props) => {
  return (
    <main>
      <nav>메뉴바-home</nav>
      <div>
        태그
        {props.children}
      </div>
    </main>
  );
};

export default VideoRecommendationPage;
