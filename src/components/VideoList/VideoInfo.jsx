import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useResponsive, usePathname } from '../../hooks';
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
  const { PN, isHome, isSearch } = usePathname();

  return (
    <StyledVideoInfo className="video-info" pathName={PN}>
      {isHome && (
        <React.Fragment>
          <div className="info-left">
            <Avatar
              video={props.video}
              size={isMobile ? 'lg' : 'md'}
              address="./index.html"
            />
          </div>

          <Link to="/video" className="info-right" onClick={getVideoComments}>
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
          </Link>
        </React.Fragment>
      )}

      {isSearch && (
        <React.Fragment>
          <Link to="/video" className="info-top" onClick={getVideoComments}>
            <h1 className="title" title={props.video.snippet.title}>
              {props.video.snippet.title}
            </h1>

            <div className="detail">
              <span className="view-count">
                조회수 <strong>{returnViewCount()}</strong>회
              </span>
              <span className="published">
                <span>{calcPublishedDate()}</span>전
              </span>
            </div>
          </Link>

          <div className="info-bottom">
            <div className="channel">
              <Avatar video={props.video} address="/video" />

              <strong className="channel-name">
                {props.video.snippet.channelTitle}
              </strong>
            </div>

            <p className="desc">{props.video.snippet.description}</p>
          </div>
        </React.Fragment>
      )}
    </StyledVideoInfo>
  );
};

export default VideoInfo;
