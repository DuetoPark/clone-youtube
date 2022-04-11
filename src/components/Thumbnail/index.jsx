import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = (props) => {
import { usePrint } from '../../hooks';

import { StyledThumbnail } from './styles';

  const { printDuration } = usePrint();

  const getVideoComments = useCallback(() => {
    const { id } = props.video;
    props.onPage(id);
  }, [props]);

  return (
    <StyledThumbnail
      as={Link}
      to="/video"
      className="thumbnail"
      onClick={getVideoComments}
    >
      <img
        src={props.video.snippet.thumbnails.high.url}
        alt={props.video.snippet.title}
      />
      <span className="duration">{printDuration(video)}</span>
    </StyledThumbnail>
  );
};

export default Thumbnail;
