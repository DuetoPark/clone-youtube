import React, { useState } from 'react';
import { useResponsive } from '../../hooks';

import Avatar from '../Avatar';
import { StyledGnbIconButton, StyledGlobalHeader } from './styles';

import {
  Logo,
  MenuIcon,
  SearchIcon,
  AppIcon,
  AppFilledIcon,
  VoiceIcon,
  UploadIcon,
  UploadFilledIcon,
  BellIcon,
  BellFilledIcon,
  AuthIcon,
  MoreIcon,
} from '../../assets';

const GlobalHeader = (props) => {
  const { isMobile } = useResponsive();
  const [myChannel, setMyChannel] = useState({
    snippet: {
      channelTitle: 'user',
    },
  });

  function toggleIconButton() {}

  return (
    <StyledGlobalHeader className="gnb">
      <div className="gnb-left">
        {/* flex-direction : row-reverse */}
        <h1 className="logo">
          <a href="./index.html" aria-label="유튜브 홈">
            <Logo aria-hidden="true" />
          </a>
        </h1>

        {!isMobile && (
          <StyledGnbIconButton
            className="gnb-icon-button is-menu"
            aria-label="메뉴 열기"
            type="button"
          >
            <MenuIcon aria-hidden="true" />
          </StyledGnbIconButton>
        )}
      </div>

      {!isMobile && (
        <div className="gnb-center">
          <form
            className="search-form"
            onSubmit={props.onSearch}
            data-mode="search"
          >
            <div className="input-group">
              <input type="text" placeholder="검색" ref={props.inputRef} />

              <StyledGnbIconButton
                className="gnb-icon-button is-search"
                aria-label="검색어 찾기"
                type="submit"
              >
                <SearchIcon aria-hidden="true" />
              </StyledGnbIconButton>
            </div>

            <StyledGnbIconButton
              className="gnb-icon-button is-voice"
              aria-label="음성으로 검색하기"
              type="button"
            >
              <VoiceIcon aria-hidden="true" />
            </StyledGnbIconButton>
          </form>
        </div>
      )}

      <div className="gnb-right">
        {isMobile && (
          <StyledGnbIconButton
            className="gnb-icon-button is-search"
            aria-label="검색 창 열기"
            type="button"
          >
            <SearchIcon aria-hidden="true" />
          </StyledGnbIconButton>
        )}

        {/* NOTE: 로그인을 한 경우 */}
        {/* <div className="button-group">
          {!isMobile && (
            <>
              <StyledGnbIconButton
                className="gnb-icon-button is-upload"
                aria-label="업로드 메뉴 열기"
                type="button"
              >
                <UploadIcon aria-hidden="true" />
                <UploadFilledIcon aria-hidden="true" />
              </StyledGnbIconButton>

              <StyledGnbIconButton
                className="gnb-icon-button is-app"
                aria-label="유튜브 앱 메뉴 열기"
                type="button"
              >
                <AppIcon aria-hidden="true" />
                <AppFilledIcon aria-hidden="true" />
              </StyledGnbIconButton>

              <StyledGnbIconButton
                className="gnb-icon-button is-alert"
                aria-label="알림 메뉴 열기"
                type="button"
              >
                <BellIcon aria-hidden="true" />
                <BellFilledIcon aria-hidden="true" />
              </StyledGnbIconButton>
            </>
          )}

          <button
            className="profile-button"
            aria-label="프로필 메뉴 열기"
            type="button"
          >
            <Avatar video={myChannel} size={isMobile ? 'xs' : 'sm'} />
          </button>
        </div> */}

        {/* NOTE: 로그인을 하지 않은 경우 */}
        {isMobile && (
          <div className="button-group">
            <button className="auth-button" aria-label="로그인" type="button">
              <AuthIcon aria-hidden="true" />
            </button>
          </div>
        )}

        {!isMobile && (
          <div className="button-group">
            <StyledGnbIconButton
              className="gnb-icon-button is-app"
              aria-label="유튜브 앱 메뉴 열기"
              type="button"
            >
              <AppIcon aria-hidden="true" />
              <AppFilledIcon aria-hidden="true" />
            </StyledGnbIconButton>

            <StyledGnbIconButton
              className="gnb-icon-button is-setting"
              aria-label="설정 열기"
              type="button"
            >
              <MoreIcon aria-hidden="true" />
            </StyledGnbIconButton>

            <button className="auth-button" type="button">
              <AuthIcon aria-hidden="true" />
              로그인
            </button>
          </div>
        )}
      </div>
    </StyledGlobalHeader>
  );
};

export default GlobalHeader;
