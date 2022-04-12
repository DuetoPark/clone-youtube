import React, { useRef, useCallback, memo } from 'react';

import { useResponsive } from '../../hooks';

import Avatar from '../../components/Avatar';

import { StyledVideoInfo } from './styles';

const PlayerInfo = memo(({ className, selectVideo }) => {
  const { isMobile } = useResponsive();

  const videoDescRef = useRef();
  const subscribeBtnRef = useRef();

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
    <StyledVideoInfo className={className}>
      <div className="video-channel">
        <Avatar
          className="avatar"
          video={selectVideo}
          size={isMobile ? 'base' : 'xl'}
        />

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
  );
});

export default PlayerInfo;
