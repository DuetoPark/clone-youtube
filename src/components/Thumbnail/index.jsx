import React, { useCallback } from 'react';
import { StyledThumbnail } from './styles';

const Thumbnail = (props) => {
  function getDuration() {
    let timeData = props.video.contentDetails.duration
      .replace('PT', '')
      .split('');
    let stack = [];

    let duration = new Array(3).fill(0);
    const HOUR = 0;
    const MIN = 1;
    const SEC = 2;

    for (let item of timeData) {
      if (item === 'H') {
        duration[HOUR] = stack.join('');
        stack = [];
      } else if (item === 'M') {
        duration[MIN] = stack.join('');
        stack = [];
      } else if (item === 'S') {
        duration[SEC] = stack.join('');
      } else {
        stack.push(item);
      }
    }

    duration[MIN] = duration[MIN] ? duration[MIN].padStart(2, '0') : '00';
    duration[SEC] = duration[SEC] ? duration[SEC].padStart(2, '0') : '00';

    if (duration[HOUR] > 0) {
      return `${duration[HOUR]}:${duration[MIN]}:${duration[SEC]}`;
    } else {
      return `${duration[MIN]}:${duration[SEC]}`;
    }
  }

  const getVideoComments = useCallback(
    (event) => {
      const { id } = props.video;
      props.onPage(event, id);
    },
    [props]
  );

  return (
    <StyledThumbnail
      href="./index.html"
      className="thumbnail"
      onClick={getVideoComments}
      data-mode="video"
    >
      <img
        src={props.video.snippet.thumbnails.high.url}
        alt={props.video.snippet.title}
      />
      <span className="duration">{getDuration()}</span>
    </StyledThumbnail>
  );
};

export default Thumbnail;
