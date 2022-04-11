import styled from 'styled-components';

import {
  MINISIDEBAR_HEIGHT_MOBILE,
  MINISIDEBAR_WIDTH_TABLET,
} from '../../components';

import { media, flexbox, textStyle } from '../../styles/utils';

const VIDEO_WIDTH_MOBILE = `calc(50% - 4px)`;

const VIDEO_LIST_MARGIN = '12px';
const SEARCH_RESULT_MARGIN = `calc(${MINISIDEBAR_HEIGHT_MOBILE} + ${VIDEO_LIST_MARGIN})`;

export const StyledSearchResult = styled.div`
  padding: 12px;
  padding-bottom: ${SEARCH_RESULT_MARGIN};
  background-color: ${({ theme }) => theme.colors.backgroundGeneral};

  .filter {
    margin-bottom: 16px;
  }

  .video-card {
    ${flexbox('between', 'start')};
    margin: 0;
    margin-bottom: 12px;

    .thumbnail,
    .video-info {
      flex-shrink: 0;
      width: ${VIDEO_WIDTH_MOBILE}; // (100% - 8px) / 2
    }

    .thumbnail {
      min-width: 160px;
      max-width: 360px;
      padding-top: clamp(90px, 28.125%, 202px);
    }
  }

  ${media.greaterThan('tablet')`
    padding: 16px 24px;
    margin-left: ${MINISIDEBAR_WIDTH_TABLET};
    
    .video-card {
      margin-bottom: 16px;

      .thumbnail {
        width: 360px;
        padding-top: 202px;
        margin-right: 16px;
      }

      .video-info {
        flex-grow: 1;
      }
    }
  `};
`;

export const StyledFilter = styled.div`
  &.is-open {
    .filter-toggle-button {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
    }

    .filter-content {
      box-sizing: content-box;
      max-height: ${(props) => props.maxHeight}px;
      padding-bottom: 32px;
    }
  }

  .filter-toggle-button {
    ${flexbox()};
    ${textStyle('md')}
    padding: 6px 16px;
    margin-left: -16px;
    border-radius: 2px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

    &:active {
      background-color: ${({ theme }) => theme.colors.borderDark};
    }

    svg {
      margin-right: 8px;
    }
  }

  .filter-content {
    ${flexbox('start', 'start')};
    max-height: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGeneral};
    overflow: hidden;
    transition: max-height 300ms ease-in-out;

    .filter-wrapper {
      width: 100%;
      padding-right: 32px;
    }
  }

  .title {
    ${textStyle('sm')};
    margin: 5px 0;
    padding: 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGeneral};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }

  .filter-button {
    ${textStyle('md')};
    padding-top: 15px;
    color: ${({ theme }) => theme.colors.secondary};
    text-align: left;
    transition: color 200ms ease-in-out;

    &:active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${media.greaterThan('tablet')`
    .filter-button {
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  `}
`;
