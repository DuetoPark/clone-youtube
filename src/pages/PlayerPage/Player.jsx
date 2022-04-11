import React from 'react';

import { StyledPlayer } from './styles';

const Player = ({ className, selectVideo, children }) => {
  return (
    <StyledPlayer className={className}>
      <figure>
        <iframe
          title="player"
          type="text/html"
          src={`https://www.youtube.com/embed/${selectVideo.id}`}
          frameBorder="0"
          allowFullScreen
        />
        <figcaption className="visually-hidden">제목</figcaption>
      </figure>

      {children}
    </StyledPlayer>
  );
};

export default Player;
