import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useResponsive, usePathname, usePrint } from '../../hooks';
import Avatar from '../Avatar';

import {
  StyledVideoInfoInHome,
  StyledVideoInfoInSearch,
  StyledVideoInfoInPlayer,
} from './styles';

const VideoInfo = ({ className, video, onVideo }) => {
  const { isMobile } = useResponsive();
  const { isHome, isSearch, isPlayer } = usePathname();
  const { printView, printDate } = usePrint();

  const changeSelectVideo = useCallback(() => {
    onVideo(video);
  }, [onVideo, video]);

  return (
    <React.Fragment>
      {isHome && (
        <StyledVideoInfoInHome className={className}>
          <div className="info-left">
            <Avatar
              className="avatar"
              video={video}
              size={isMobile ? 'lg' : 'md'}
              address="./index.html"
            />
          </div>

          <Link to="/player" className="info-right" onClick={changeSelectVideo}>
            <h1 className="title" title={video.snippet.title}>
              {video.snippet.title}
            </h1>

            <div className="detail">
              <strong className="channel-name">
                {video.snippet.channelTitle}
              </strong>

              <span className="view-count">
                조회수 <strong>{printView(video)}</strong>회
              </span>

              <span className="published">
                <span>{printDate(video)}</span>전
              </span>
            </div>
          </Link>
        </StyledVideoInfoInHome>
      )}

      {isSearch && (
        <StyledVideoInfoInSearch className="video-info">
          <Link to="/player" className="info-top" onClick={changeSelectVideo}>
            <h1 className="title" title={video.snippet.title}>
              {video.snippet.title}
            </h1>

            <div className="detail">
              <span className="view-count">
                조회수 <strong>{printView(video)}</strong>회
              </span>
              <span className="published">
                <span>{printDate(video)}</span>전
              </span>
            </div>
          </Link>

          <div className="info-bottom">
            <div className="channel">
              <Avatar video={video} address="/player" />

              <strong className="channel-name">
                {video.snippet.channelTitle}
              </strong>
            </div>

            <p className="desc">{video.snippet.description}</p>
          </div>
        </StyledVideoInfoInSearch>
      )}

      {isPlayer && (
        <StyledVideoInfoInPlayer className="video-info">
          {isMobile && (
            <div className="info-left">
              <Avatar
                className="avatar"
                video={video}
                address="/player"
                size={'lg'}
              />
            </div>
          )}

          <Link to="/player" className="info-right" onClick={changeSelectVideo}>
            <h1 className="title" title={video.snippet.title}>
              {video.snippet.title}
            </h1>

            <div className="detail">
              <strong className="channel">{video.snippet.channelTitle}</strong>

              <span className="view-count">
                조회수 <strong>{printView(video)}</strong>회
              </span>

              {!isMobile && (
                <span className="published">
                  <span>{printDate(video)}</span>전
                </span>
              )}
            </div>
          </Link>
        </StyledVideoInfoInPlayer>
      )}
    </React.Fragment>
  );
};

export default VideoInfo;
