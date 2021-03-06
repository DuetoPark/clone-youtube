import styled from 'styled-components';

import {
  GNB_HEIGHT_TABLET,
  MINISIDEBAR_WIDTH_TABLET,
  MINISIDEBAR_HEIGHT_MOBILE,
} from '../';

import { textStyle, media, flexbox } from '../../styles/utils';

export const StyledMiniSidebar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.levels.miniSidebar};
  width: 100%;
  height: calc(${MINISIDEBAR_HEIGHT_MOBILE} + 1px);
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.borderGeneral};

  .main-menu-list {
    ${flexbox()};
  }

  .menu-item {
    &.is-active {
      background-color: ${({ theme }) => theme.colors.white};
    }

    &:nth-child(2),
    &:nth-child(n + 6) {
      display: none;
    }

    a {
      ${textStyle('xs')};
      flex-direction: column;
      justify-content: center;
      height: 48px;
      padding: 0;
      font-size: 11px;

      svg {
        margin: 0;
      }
    }
  }

  ${media.greaterThan('tablet')`
    width: ${MINISIDEBAR_WIDTH_TABLET};
    height: 100vh;
    padding-top: calc(${GNB_HEIGHT_TABLET} + 4px);
    border-top: 0;


    .main-menu-list {
      flex-direction: column;
    }

    .menu-item{
      &:nth-child(2) {
        display: block;
      }

      a {
        height: auto;
        padding-top: 16px;
        padding-bottom: 14px;
        font-size: 10px;


        svg {
          margin-bottom: 6px;
        }
      }
    }
  `}
`;
