import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { usePrint } from '../../hooks';

import { StyledThumbnail } from './styles';

const Thumbnail = ({ className, video, onVideo }) => {
  const { printDuration } = usePrint();

  const changeSelectVideo = useCallback(() => {
    onVideo(video);
  }, [onVideo, video]);

  return (
    <StyledThumbnail
      as={Link}
      to="/player"
      className={className}
      onClick={changeSelectVideo}
    >
      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
      <span className="duration">{printDuration(video)}</span>
    </StyledThumbnail>
  );
};

export default Thumbnail;
