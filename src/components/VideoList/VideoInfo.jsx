import React, { useCallback } from 'react';

import { useResponsive } from '../../hooks/useResponsive.js';
import Avatar from '../Avatar';

import { StyledVideoInfo } from './styles';

const VideoInfo = (props) => {
  function calcPublishedDate() {
    const publishedDate = props.video.snippet.publishedAt.split('T')[0];
    const [year, month, date] = publishedDate.split('-');

    const now = new Date();
    const yearAmount = now.getFullYear() - year;
    const monthAmount = now.getMonth() - month;

    if (yearAmount > 0) {
      return `${yearAmount}년 `;
    } else if (monthAmount > 0) {
      return `${monthAmount}달 `;
    } else {
      return `${now.getDate() - date}일 `;
    }
  }

  function returnViewCount() {
    const viewCount = props.video.statistics.viewCount;

    return Number(viewCount).toLocaleString();
  }

  const getVideoComments = useCallback(
    (event) => {
      const { id } = props.video;
      props.onPage(event, id);
    },
    [props]
  );

  const { isMobile } = useResponsive();

  return (
    <StyledVideoInfo className="video-info">
      <div className="info-left">
        <Avatar video={props.video} size={isMobile ? 'lg' : 'md'} />
      </div>

      <a
        href="./index.html"
        className="info-right"
        onClick={getVideoComments}
        data-mode="video"
      >
        <h1 className="title" title={props.video.snippet.title}>
          {props.video.snippet.title}
        </h1>

        <div className="detail">
          <strong className="channel-name">
            {props.video.snippet.channelTitle}
          </strong>
          <span className="view-count">
            조회수 <strong>{returnViewCount()}</strong>회
          </span>
          <span className="published">
            <span>{calcPublishedDate()}</span>전
          </span>
        </div>
      </a>
    </StyledVideoInfo>
  );
};

export default VideoInfo;
