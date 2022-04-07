import React, { memo } from 'react';

import { StyledMenu } from './styles';

import {
  HomeIcon,
  HomeFilledIcon,
  QuestIcon,
  QuestFilledIcon,
  ShortsIcon,
  ShortsFilledIcon,
  FollowIcon,
  FollowFilledIcon,
  CartIcon,
  CartFilledIcon,
  HistoryIcon,
  HistoryFilledIcon,
  MyVideoIcon,
  AddIcon,
  AddFilledIcon,
  LikeIcon,
  LikeFilledIcon,
  SportsIcon,
  SportsFilledIcon,
  GameIcon,
  GameFilledIcon,
  LiveIcon,
  LiveFilledIcon,
  LearningIcon,
  LearningFilledIcon,
  MovieIcon,
  MovieFilledIcon,
  PlusIcon,
  PremiumIcon,
  SettingIcon,
  ReportIcon,
  ServiceIcon,
  InquiryIcon,
} from '../../assets';

function getIcon(category, active) {
  switch (category) {
    case '홈':
      if (active) {
        return <HomeFilledIcon aria-hidden="true" />;
      } else {
        return <HomeIcon aria-hidden="true" />;
      }
    case '탐색':
      if (active) {
        return <QuestFilledIcon aria-hidden="true" />;
      } else {
        return <QuestIcon aria-hidden="true" />;
      }
    case 'Shorts':
      if (active) {
        return <ShortsFilledIcon aria-hidden="true" />;
      } else {
        return <ShortsIcon aria-hidden="true" />;
      }
    case '구독':
      if (active) {
        return <FollowFilledIcon aria-hidden="true" />;
      } else {
        return <FollowIcon aria-hidden="true" />;
      }
    case '보관함':
      if (active) {
        return <CartFilledIcon aria-hidden="true" />;
      } else {
        return <CartIcon aria-hidden="true" />;
      }
    case '시청 기록':
      if (active) {
        return <HistoryFilledIcon aria-hidden="true" />;
      } else {
        return <HistoryIcon aria-hidden="true" />;
      }
    case '내 동영상':
      return <MyVideoIcon aria-hidden="true" />;
    case '나중에 볼 동영상':
      if (active) {
        return <AddFilledIcon aria-hidden="true" />;
      } else {
        return <AddIcon aria-hidden="true" />;
      }
    case '좋아요 표시한 동영상':
      if (active) {
        return <LikeFilledIcon aria-hidden="true" />;
      } else {
        return <LikeIcon aria-hidden="true" />;
      }
    // case '음악':
    //     return <HomeIcon aria-hidden="true" />;
    case '스포츠':
      if (active) {
        return <SportsFilledIcon aria-hidden="true" />;
      } else {
        return <SportsIcon aria-hidden="true" />;
      }
    case '게임':
      if (active) {
        return <GameFilledIcon aria-hidden="true" />;
      } else {
        return <GameIcon aria-hidden="true" />;
      }
    case '영화':
      if (active) {
        return <MovieFilledIcon aria-hidden="true" />;
      } else {
        return <MovieIcon aria-hidden="true" />;
      }
    // case '뉴스':
    // return <CartFilledIcon aria-hidden="true" />;
    case '실시간':
      if (active) {
        return <LiveFilledIcon aria-hidden="true" />;
      } else {
        return <LiveIcon aria-hidden="true" />;
      }
    case '학습':
      if (active) {
        return <LearningFilledIcon aria-hidden="true" />;
      } else {
        return <LearningIcon aria-hidden="true" />;
      }
    // case '360° 동영상':
    //     return <FollowIcon aria-hidden="true" />;
    case '채널 탐색':
      return <PlusIcon aria-hidden="true" />;
    case 'YouTube Primium':
      return <PremiumIcon aria-hidden="true" />;
    case '설정':
      return <SettingIcon aria-hidden="true" />;
    case '신고 기록':
      return <ReportIcon aria-hidden="true" />;
    case '고객센터':
      return <ServiceIcon aria-hidden="true" />;
    case '의견 보내기':
      return <InquiryIcon aria-hidden="true" />;
    default:
      break;
  }
}

const MenuItem = memo((props) => {
  return (
    <li className={`${props.menuType}-menu-item ${props.className}`}>
      <StyledMenu
        className={`menu`}
        to="/"
        data-category={props.category}
        data-menu={props.menuType}
      >
        {getIcon(props.category, props.active)}
        {props.category}
      </StyledMenu>
    </li>
  );
});

export default MenuItem;
