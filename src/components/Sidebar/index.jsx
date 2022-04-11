import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import MenuList from '../MenuList';
import GlobalFooter from '../GlobalFooter';
import { Logo, MenuIcon, AuthIcon } from '../../assets';

import { StyledGnbIconButton } from '../GlobalHeader/styles';
import { StyledSidebar, StyledSidebarNav } from './styles';

const Sidebar = (props) => {
  const closeSidebar = useCallback(() => {
    props.sidebar.close();
  }, [props]);

  return (
    <StyledSidebar ref={props.sidebarRef} className="sidebar">
      <header className="sidebar-header">
        <h1 className="visually-hidden">사이드바</h1>

        <StyledGnbIconButton
          ref={props.sidebarCloseBtnRef}
          className="close-button"
          onClick={closeSidebar}
          aria-label="사이드바 닫기"
          type="button"
        >
          <MenuIcon aria-hidden="true" />
        </StyledGnbIconButton>

        <Link
          className="logo"
          to="/"
          onClick={props.onHome}
          aria-label="유튜브 홈"
        >
          <Logo aria-hidden="true" />
        </Link>
      </header>

      <div className="sidebar-content">
        <StyledSidebarNav className="sidebar-nav">
          <h2 className="visually-hidden">메뉴</h2>

          <div className="menu-group is-common">
            <MenuList
              className="main-menu-list"
              menuType="main"
              menuItems={props.menu.main}
              onMenu={props.onMenu}
            />

            <MenuList
              className="main-menu-list"
              menuType="main"
              menuItems={props.menu.main}
              onMenu={props.onMenu}
            />
          </div>

          {/* NOTE: 로그인을 하지 않은 경우 */}
          <div className="menu-group is-desc">
            <p>
              로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수
              있습니다.
            </p>

            <button className="auth-button" type="button">
              <AuthIcon className="ic-auth" aria-hidden="true" />
              로그인
            </button>
          </div>

          <div className="menu-group is-popular">
            <h2 className="menu-title">인기 YOUTUBE</h2>

            <MenuList
              className="popular-menu-list"
              menuType="popular"
              menuItems={props.menu.popular}
              onMenu={props.onMenu}
            />
          </div>

          <div className="menu-group is-find">
            <MenuList
              className="find-menu-list"
              menuType="find"
              menuItems={props.menu.find}
              onMenu={props.onMenu}
            />
          </div>

          <div className="menu-group is-more">
            <h2 className="menu-title">YOUTUBE 더보기</h2>

            <MenuList
              className="moreNotUser-menu-list"
              menuType="moreNotUser"
              menuItems={props.menu.moreNotUser}
              onMenu={props.onMenu}
            />
          </div>

          {/* NOTE: 로그인을 한 경우 */}
          {/* <div className="menu-group is-more">
            <h2 className="menu-title">YOUTUBE 더보기</h2>

            <MenuList
              className="moreUser-menu-list"
              menuType="moreUser"
              menuItems={props.menu.moreUser}
              onMenu={props.onMenu}
            />
          </div> */}

          <div className="menu-group is-service">
            <MenuList
              className="service-menu-list"
              menuType="service"
              menuItems={props.menu.service}
              onMenu={props.onMenu}
            />
          </div>
        </StyledSidebarNav>

        <GlobalFooter />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
