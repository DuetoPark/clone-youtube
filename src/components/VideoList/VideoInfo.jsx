import React, { useCallback } from 'react';

import { useResponsive } from '../../hooks';
import Avatar from '../Avatar';

import { StyledVideoInfo } from './styles';

const VideoInfo = (props) => {
  const calcPublishedDate = useCallback(() => {
    const publishedDate = props.video.snippet.publishedAt.split('T')[0];
    const [year, month, date] = publishedDate.split('-');

    const now = new Date();
    const yearAmount = now.getFullYear() - year;
    const monthAmount = now.getMonth() - month;
    const dateAmount = now.getDate() - date;

    if (yearAmount > 0) {
      return `${yearAmount}년 `;
    } else if (monthAmount > 0) {
      return `${monthAmount}달 `;
    } else if (dateAmount > 0) {
      return `${dateAmount}일 `;
    } else {
      return;
    }
  }, [props]);

  const returnViewCount = useCallback(() => {
    const { viewCount } = props.video.statistics;

    if (viewCount > 100000) {
      const divided = Math.floor(viewCount / 10000);
      return `${divided.toLocaleString()}만`;
    } else if (viewCount >= 10000) {
      const divided = (viewCount / 10000).toFixed(1);
      return `${divided.toLocaleString()}만`;
    } else if (viewCount >= 1000) {
      const divided = (viewCount / 1000).toFixed(1);
      return `${divided.toLocaleString()}천`;
    } else {
      return Number(viewCount).toLocaleString();
    }
  }, [props]);

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
        <Avatar
          video={props.video}
          size={isMobile ? 'lg' : 'md'}
          address="./index.html"
        />
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
