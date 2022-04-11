import React, { useRef, useCallback } from 'react';

import { useResponsive, usePrint } from '../../hooks';

import {
  LikeIcon,
  LikeFilledIcon,
  ShareIcon,
  ClipIcon,
  SaveIcon,
  ReportIcon,
  ReportFilledIcon,
  MoreIcon,
} from '../../assets';

import Avatar from '../../components/Avatar';

import { StyledPlayer, StyledPlayerHeader, StyledVideoInfo } from './styles';

const Player = ({ selectVideo }) => {
  const videoDescRef = useRef();
  const subscribeBtnRef = useRef();
  const { isMobile } = useResponsive();
  const { printView, printLike, printDate } = usePrint();

  const toggleVideoDesc = useCallback(
    (event) => {
      const videoDesc = videoDescRef.current;
      videoDesc.classList.toggle('is-open');

      const controlButton = event.currentTarget;
      controlButton.innerHTML = videoDesc.matches('.is-open')
        ? '간략히'
        : '더보기';
    },
    [videoDescRef]
  );

  const toggleScribeBtn = useCallback(() => {
    const subscribeBtn = subscribeBtnRef.current;
    const isActive = subscribeBtn.matches('.is-active');

    if (isActive && window.confirm('구독을 취소하시겠습니까?')) {
      subscribeBtn.classList.remove('is-active');
      subscribeBtn.innerHTML = '구독';
      return;
    }

    subscribeBtn.classList.add('is-active');
    subscribeBtn.innerHTML = '구독중';
  }, []);

  return (
    <StyledPlayer className="player">
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

      <StyledPlayerHeader className="player-header">
        <h1 className="title">{selectVideo.snippet.title}</h1>

        <div className="player-statistics">
          <div className="player-view">
            <span>
              조회수 <strong>{printView(selectVideo)}</strong>회
            </span>
            <span>{printDate(selectVideo)}전</span>
          </div>

          <div className="button-group">
            <button type="button" aria-label="영상이 좋아요">
              <LikeIcon aria-hidden="true" />
              {printLike(selectVideo)}
              <span className="visually-hidden">개</span>
            </button>

            <button type="button" aria-label="영상이 마음에 들지 않아요">
              <LikeIcon aria-hidden="true" />
              싫어요
            </button>

            <button type="button">
              <ShareIcon aria-hidden="true" />
              공유
            </button>

            {!isMobile && (
              <button type="button">
                <ClipIcon aria-hidden="true" />
                클립
              </button>
            )}

            <button type="button">
              <SaveIcon aria-hidden="true" />
              저장
            </button>

            {isMobile && (
              <button type="button">
                <ReportIcon aria-hidden="true" />
                신고
              </button>
            )}

            {!isMobile && (
              <button type="button" aria-label="더보기">
                <MoreIcon aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </StyledPlayerHeader>

      <StyledVideoInfo className="video-info">
        <div className="video-channel">
          <Avatar video={selectVideo} size={isMobile ? 'base' : 'xl'} />

          <div className="channel-overview">
            <strong className="name">{selectVideo.snippet.channelTitle}</strong>
          </div>

          <button
            className="subscribe-button"
            onClick={toggleScribeBtn}
            type="button"
            ref={subscribeBtnRef}
          >
            구독
          </button>
        </div>

        {!isMobile && (
          <div className="video-desc">
            <p className="desc" ref={videoDescRef}>
              {selectVideo.snippet.description}
            </p>

            <button
              className="control-button"
              type="button"
              onClick={toggleVideoDesc}
            >
              더보기
            </button>
          </div>
        )}
      </StyledVideoInfo>
    </StyledPlayer>
  );
};

export default Player;
