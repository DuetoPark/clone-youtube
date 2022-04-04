import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuList from '../MenuList';
import { StyledGnbIconButton } from '../GlobalHeader/styles';
import { Logo, MenuIcon, AuthIcon } from '../../assets';

import { StyledSidebar, StyledSidebarNav, StyledSidebarFooter } from './styles';

const Sidebar = (props) => {
  const [guideLink, setGuideLink] = useState({
    primary: [
      { id: 1, value: '정보' },
      { id: 2, value: '보도자료' },
      { id: 3, value: '저작권' },
      { id: 4, value: '문의하기' },
      { id: 5, value: '크리에이터' },
      { id: 6, value: '광고' },
      { id: 7, value: '개발자' },
    ],
    secondary: [
      { id: 1, value: '약관' },
      { id: 2, value: '개인정보처리방침' },
      { id: 3, value: '정책 및 안전' },
      { id: 4, value: 'YouTube 작동의 원리' },
      { id: 5, value: '새로운 기능 테스트하기' },
    ],
  });

  return (
    <StyledSidebar className="sidebar is-active">
      <header className="sidebar-header">
        <h1 className="visually-hidden">사이드바</h1>

        <StyledGnbIconButton
          className="close-button"
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
              menuType="main"
              menuItems={props.menu.main}
              onMenu={props.onMenu}
              callBackFunc={props.callBackFunc}
            />

            <MenuList
              menuType="history"
              menuItems={props.menu.history}
              onMenu={props.onMenu}
              callBackFunc={props.callBackFunc}
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
              menuType="popular"
              menuItems={props.menu.popular}
              onMenu={props.onMenu}
              callBackFunc={props.callBackFunc}
            />
          </div>

          <div className="menu-group is-find">
            <MenuList
              menuType="find"
              menuItems={props.menu.find}
              onMenu={props.onMenu}
              callBackFunc={props.callBackFunc}
            />
          </div>

          <div className="menu-group is-more">
            <h2 className="menu-title">YOUTUBE 더보기</h2>

            <MenuList
              menuType="moreNotUser"
              menuItems={props.menu.moreNotUser}
              onMenu={props.onMenu}
              callBackFunc={props.callBackFunc}
            />
          </div>

          {/* NOTE: 로그인을 한 경우 */}
          {/* <div className="menu-group is-more">
            <h2 className="menu-title">YOUTUBE 더보기</h2>

            <MenuList
              menuType="moreUser"
              menuItems={props.menu.moreUser}
              onMenu={props.onMenu}
              callBackFunc={props.callBackFunc}
            />
          </div> */}

          <div className="menu-group is-service">
            <MenuList
              menuType="service"
              menuItems={props.menu.service}
              onMenu={props.onMenu}
              callBackFunc={props.callBackFunc}
            />
          </div>
        </StyledSidebarNav>

        <StyledSidebarFooter className="sidebar-footer">
          {/* {Object.keys(guideLink).map((key) => {
            return (
              <div className=`guide-link-list is-${key}`>
                {guideLink[key].map((item) => {
                  return <Link to="/">{item.value}</Link>;
                })}
              </div>
            );
          })} */}

          <div className="guide-link-group is-primary">
            {guideLink.primary.map((item) => {
              return <Link to="/">{item.value}</Link>;
            })}
          </div>

          <div className="guide-link-group is-secondary">
            {guideLink.secondary.map((item) => {
              return <Link to="/">{item.value}</Link>;
            })}
          </div>

          <div className="info">
            <p className="copyright">© 2022 Google LLC</p>

            <dl className="detail">
              {[
                { id: 1, term: 'CEO', desc: '선다 피차이' },
                {
                  id: 2,
                  term: '주소',
                  desc: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.',
                },
                { id: 3, term: '전화', desc: '080-822-1450(무료)' },
              ].map((item) => {
                if (item.term !== '전화') {
                  return (
                    <div key={item.id}>
                      <dt>{item.term}</dt>
                      <dd>{item.desc}</dd>
                    </div>
                  );
                } else {
                  const [number, rest] = item.desc.split('(');
                  const option = '(' + rest;

                  return (
                    <div key={item.id}>
                      <dt>{item.term}</dt>
                      <dd>
                        <a href={`tel:${number}`}>{number} </a>
                        {option}
                      </dd>
                    </div>
                  );
                }
              })}
            </dl>
          </div>
        </StyledSidebarFooter>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
