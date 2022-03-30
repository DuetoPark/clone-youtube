import React from 'react';

const VideoViewPage = (props) => {
  return (
    <main>
      <section>비디오 플레이어, 댓글</section>
      <div>
        태그
        {props.children}
      </div>
    </main>
  );
};

export default VideoViewPage;
