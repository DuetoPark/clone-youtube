import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useResponsive } from '../../hooks';
import Modal from '../../app/modal';

import Avatar from '../Avatar';
import GnbSearch from './GnbSearch';

import { StyledGnbIconButton, StyledGlobalHeader } from './styles';

import {
  Logo,
  AppIcon,
  AppFilledIcon,
  AuthIcon,
  ArrowIcon,
  BellIcon,
  BellFilledIcon,
  MenuIcon,
  MoreIcon,
  UploadIcon,
  UploadFilledIcon,
  SearchIcon,
  VoiceIcon,
} from '../../assets';

const GlobalHeader = ({
  className,
  inputRef,
  sidebar,
  sidebarTriggerRef,
  menuItems,
  onHome,
  onSearch,
  onButton,
  onInput,
}) => {
  const { isMobile } = useResponsive();
  const [myChannel, setMyChannel] = useState({
    snippet: {
      channelTitle: 'user',
    },
  });

  const getIcon = useCallback((category, active) => {
    switch (category) {
      case 'upload':
        if (active) {
          return <UploadFilledIcon aria-hidden="true" />;
        }
        return <UploadIcon aria-hidden="true" />;
      case 'app':
        if (active) {
          return <AppFilledIcon aria-hidden="true" />;
        }
        return <AppIcon aria-hidden="true" />;
      case 'alert':
        if (active) {
          return <BellFilledIcon aria-hidden="true" />;
        }
        return <BellIcon aria-hidden="true" />;
      default:
    }
  }, []);

  const getMenuState = useCallback(
    (category) => {
      const menuData = menuItems.filter((item) => item.category === category);

      return menuData[0].active;
    },
    [menuItems]
  );

  const openSidebar = useCallback(() => {
    sidebar.open();
  }, [sidebar]);

  const searchGroupRef = useRef();
  const searchTriggerRef = useRef();
  const searchCloseBtnRef = useRef();
  const mobileSearch = new Modal(
    searchGroupRef.current,
    searchTriggerRef.current,
    searchCloseBtnRef.current
  );

  const openMobileSearch = useCallback(() => {
    mobileSearch.open();
  }, [mobileSearch]);

  const closeMobileSearch = useCallback(() => {
    mobileSearch.close();
  }, [mobileSearch]);

  return (
    <StyledGlobalHeader className={className}>
      <div className="gnb-left">
        <h1 className="logo">
          <Link to="/" onClick={onHome} aria-label="유튜브 홈">
            <Logo aria-hidden="true" />
          </Link>
        </h1>

        {!isMobile && (
          <StyledGnbIconButton
            ref={sidebarTriggerRef}
            className="gnb-icon-button is-menu"
            onClick={openSidebar}
            aria-label="메뉴 열기"
            type="button"
          >
            <MenuIcon aria-hidden="true" />
          </StyledGnbIconButton>
        )}
      </div>

      <div className="gnb-center">
        {!isMobile && (
          <GnbSearch
            className="search-form"
            onSearch={onSearch}
            onInput={onInput}
            inputRef={inputRef}
          >
            <StyledGnbIconButton
              className="gnb-icon-button is-voice"
              aria-label="음성으로 검색하기"
              type="button"
            >
              <VoiceIcon aria-hidden="true" />
            </StyledGnbIconButton>
          </GnbSearch>
        )}
      </div>

      <div className="gnb-right">
        {isMobile && (
          <React.Fragment>
            <StyledGnbIconButton
              className="gnb-icon-button is-search"
              aria-label="검색 창 열기"
              type="button"
              ref={searchTriggerRef}
              onClick={openMobileSearch}
            >
              <SearchIcon aria-hidden="true" />
            </StyledGnbIconButton>

            <div className="search-group" ref={searchGroupRef}>
              <StyledGnbIconButton
                className="gnb-icon-button close-button"
                aria-label="검색 창 닫기"
                type="button"
                ref={searchCloseBtnRef}
                onClick={closeMobileSearch}
              >
                <ArrowIcon aria-hidden="true" />
              </StyledGnbIconButton>

              <GnbSearch
                className="search-form"
                onSearch={onSearch}
                onInput={onInput}
                inputRef={inputRef}
              >
                <StyledGnbIconButton
                  className="gnb-icon-button is-voice"
                  aria-label="음성으로 검색하기"
                  type="button"
                >
                  <VoiceIcon aria-hidden="true" />
                </StyledGnbIconButton>
              </GnbSearch>
            </div>
          </React.Fragment>
        )}

        {/* NOTE: 로그인을 한 경우 */}
        {/* <div
            className="button-group"
            onClick={onButton};
            }}
          >
          {!isMobile && (
            <>
              <StyledGnbIconButton
                className="gnb-icon-button is-upload"
                aria-label="업로드 메뉴 열기"
                type="button"
              >
                {getIcon('upload', getMenuState('upload'))}
              </StyledGnbIconButton>

              <StyledGnbIconButton
                className="gnb-icon-button is-app"
                aria-label="유튜브 앱 메뉴 열기"
                type="button"
              >
                {getIcon('app', getMenuState('app'))}
              </StyledGnbIconButton>

              <StyledGnbIconButton
                className="gnb-icon-button is-alert"
                aria-label="알림 메뉴 열기"
                type="button"
              >
                {getIcon('alert', getMenuState('alert'))}
              </StyledGnbIconButton>
            </>
          )}

          <Avatar
            className="avatar profile-button"
            aria-label="프로필 메뉴 열기"
            video={myChannel}
            size={isMobile ? 'xs' : 'sm'}
          />
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
          <div className="button-group" onClick={onButton}>
            <StyledGnbIconButton
              className="gnb-icon-button is-app"
              aria-label="유튜브 앱 메뉴 열기"
              type="button"
              data-category="app"
              data-menu="gnb"
            >
              {getIcon('app', getMenuState('app'))}
            </StyledGnbIconButton>

            <StyledGnbIconButton
              className="gnb-icon-button is-setting"
              aria-label="설정 열기"
              type="button"
            >
              <MoreIcon aria-hidden="true" />
            </StyledGnbIconButton>

            <button className="auth-button" type="button">
              <AuthIcon className="ic-auth" aria-hidden="true" />
              로그인
            </button>
          </div>
        )}
      </div>
    </StyledGlobalHeader>
  );
};

export default GlobalHeader;
