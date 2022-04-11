import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useResponsive, usePathname, usePrint } from '../../hooks';
import Avatar from '../Avatar';

import {
  StyledVideoInfoInHome,
  StyledVideoInfoInSearch,
  StyledVideoInfoInPlayer,
} from './styles';

const VideoInfo = (props) => {
  const { isMobile } = useResponsive();
  const { isHome, isSearch, isPlayer } = usePathname();
  const { printView, printDate } = usePrint();


  return (
    <React.Fragment>
      {isHome && (
        <StyledVideoInfoInHome className="video-info">
          <div className="info-left">
            <Avatar
              className="avatar"
              video={props.video}
              size={isMobile ? 'lg' : 'md'}
              address="./index.html"
            />
          </div>

          <Link to="/video" className="info-right">
            <h1 className="title" title={props.video.snippet.title}>
              {props.video.snippet.title}
            </h1>

            <div className="detail">
              <strong className="channel-name">
                {props.video.snippet.channelTitle}
              </strong>

              <span className="view-count">
                조회수 <strong>{printView(props.video)}</strong>회
              </span>

              <span className="published">
                <span>{printDate(props.video)}</span>전
              </span>
            </div>
          </Link>
        </StyledVideoInfoInHome>
      )}

      {isSearch && (
        <StyledVideoInfoInSearch className="video-info">
          <Link to="/video" className="info-top">
            <h1 className="title" title={props.video.snippet.title}>
              {props.video.snippet.title}
            </h1>

            <div className="detail">
              <span className="view-count">
                조회수 <strong>{printView(props.video)}</strong>회
              </span>
              <span className="published">
                <span>{printDate(props.video)}</span>전
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
        </StyledVideoInfoInSearch>
      )}

      {isPlayer && (
        <StyledVideoInfoInPlayer className="video-info">
          <div className="info-left">
            <Avatar
              className="avatar"
              video={props.video}
              address="/video"
              size={'lg'}
            />
          </div>

          <Link to="/video" className="info-right">
            <h1 className="title" title={props.video.snippet.title}>
              {props.video.snippet.title}
            </h1>

            <div className="detail">
              <strong className="channel">
                {props.video.snippet.channelTitle}
              </strong>

              <span className="view-count">
                조회수 <strong>{printView(props.video)}</strong>회
              </span>

              {isTablet && (
                <span className="published">
                  <span>{printDate(props.video)}</span>전
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
