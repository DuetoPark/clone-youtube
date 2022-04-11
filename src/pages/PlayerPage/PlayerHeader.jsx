import React from 'react';

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

import { StyledPlayerHeader } from './styles';

const PlayerHeader = ({ className, selectVideo }) => {
  const { isMobile } = useResponsive();
  const { printView, printLike, printDate } = usePrint();

  return (
    <StyledPlayerHeader className={className}>
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
  );
};

export default PlayerHeader;
