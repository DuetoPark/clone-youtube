import styled from 'styled-components';

import {
  GNB_HEIGHT_MOBILE,
  GNB_HEIGHT_TABLET,
  MINISIDEBAR_WIDTH_TABLET,
} from '../../components';

import { media, flexbox, noScrollbar } from '../../styles/utils';

export const StyledRecommendation = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundGeneral};

  .video-list {
    ${flexbox('start', 'start')};
    flex-wrap: wrap;
  }

  .video-item {
    width: 100%;
  }

  ${media.greaterThan('mobile')`
    .video-item {
      width: calc(100% / 2);
    }
  `};

  ${media.greaterThan('tablet')`
    width: calc(100% - ${MINISIDEBAR_WIDTH_TABLET});
    margin-left: ${MINISIDEBAR_WIDTH_TABLET};

    .video-list {
      margin: 0 16px;
      margin-top: 24px;
    }

    .video-item {
      width: calc(100% / 3);
    }
  `};

  ${media.greaterThan('desktop')`
    .video-item {
      width: calc(100% / 4);
    }
  `};
`;

const TAB_HEADER_HEIGHT_MOBILE = '48px';
const TAB_HEADER_HEIGHT_TABLET = '56px';

const Quest_Button_MARGIN = '12px';

export const StyledTabHeader = styled.header`
  ${flexbox('start')};
  ${noScrollbar()};
  position: sticky;
  top: ${GNB_HEIGHT_MOBILE};
  left: 0;
  z-index: ${({ theme }) => theme.levels.tabList};
  width: 100%;
  height: ${TAB_HEADER_HEIGHT_MOBILE};
  overflow-y: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGeneral};
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(2px) saturate(150%);

  .quest-button {
    ${flexbox('start')};
    white-space: nowrap;
  }

  .quest-button {
    position: relative;
    height: 32px;
    padding-right: 12px;
    padding-left: 6px;
    margin: 0 ${Quest_Button_MARGIN};
    background-color: ${({ theme }) => theme.colors.backgroundHover};

    &::after {
      content: '';
      position: absolute;
      right: -${Quest_Button_MARGIN};
      display: block;
      width: 1px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.backgroundActive};
    }
  }

  .tab-list {
    margin-right: 16px;
    margin-left: 12px;
  }

  ${media.greaterThan('tablet')`
    top: ${GNB_HEIGHT_TABLET};
    height: ${TAB_HEADER_HEIGHT_TABLET};
    border-top: 1px solid ${({ theme }) => theme.colors.borderGeneral};

    .tab-list {
      margin: 0 24px;
    }
  `};
`;
