import styled from 'styled-components';

import { flexbox, textStyle } from '../../styles/utils';

const SIDEBAR_HEADER_HEIGHT = '56px';

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.levels.sidebar};
  width: 240px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out,
    visibility 200ms ease-in-out;

  &.is-active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  .sidebar-header {
    ${flexbox('start')};
    height: ${SIDEBAR_HEADER_HEIGHT};
    padding-left: 16px;

    .logo {
      padding: 18px 14px 18px 8px;
      margin-left: 8px;

      svg {
        display: block;
      }
    }
  }

  .sidebar-content {
    height: calc(100% - ${SIDEBAR_HEADER_HEIGHT});
    overflow: scroll;
  }
`;

export const StyledSidebarNav = styled.nav`
  padding-right: 16px;
  width: 100%;

  > div {
    padding: 8px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGeneral};

    .menu-title {
      ${textStyle('md')};
      padding: 8px 24px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secondary};
    }

    &.is-common {
      padding: 0;

      .main-menu-list:first-child {
        padding: 12px 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderGeneral};

        .menu-item:nth-child(n + 5) {
          display: none;
        }
      }

      .main-menu-list:last-child {
        padding: 8px 0;

        // NOTE: 로그인을 한 경우
        // .menu-item:nth-child(-n + 4) {
        //   display: none;
        // }

        // NOTE: 로그인을 하지 않은 경우
        .menu-item {
          display: none;

          &:nth-child(n + 5):nth-child(-n + 6) {
            display: block;
          }
        }
      }
    }

    &.is-desc {
      ${textStyle('md')};
      padding: 16px 32px;
      color: ${({ theme }) => theme.colors.primary};

      p {
        margin-bottom: 12px;
      }

      .auth-button {
        ${flexbox()}
        height: 36px;
        padding: 0 15px;
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.blue};
        transition: background-color 200ms ease-in-out;

        &:active {
          background-color: ${({ theme }) => theme.colors.borderGeneral};
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.borderGeneral};
        }

        .ic-auth {
          margin-right: 8px;
        }
      }
    }
  }
`;
