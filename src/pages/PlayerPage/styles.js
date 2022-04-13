import styled from 'styled-components';

import { textStyle, flexbox, media, noScrollbar } from '../../styles/utils';

const PRIMARY_MIN_WIDTH = '640px';
const MAIN_PADDING = '72px'; // NOTE: 24px * 3

export const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundGeneral};

  .secondary {
    padding: 12px;

    &-title {
      ${textStyle('md')};
      margin-bottom: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }

    .video-card {
      margin: 0;
      margin-bottom: 12px;

      .video-info {
        padding: 12px 0;
      }
    }
  }

  ${media.greaterThan('tablet')`
    ${flexbox('start', 'start')};
    padding: 24px;

    .primary {
      flex-grow: 1;
      min-width: ${PRIMARY_MIN_WIDTH};
      margin-right: 24px;
    }

    .secondary {
      flex-shrink: 1;
      width: calc(100vw - ${PRIMARY_MIN_WIDTH} - ${MAIN_PADDING});
      max-width: 400px;
      padding: 0;

      .tab-list {
        ${noScrollbar()};
      }

      .tab-item {
        margin: 8px;
        margin-left: 0;
      }

      .video-card {
        ${flexbox('start', 'start')};
        margin-bottom: 8px;

        .thumbnail{
          flex-shrink: 0;
          width: 168px;
          padding-top: 94px; // ratio
          margin-right: 8px;
        }

        .video-info {
          padding: 0;
        }
      }
    }
  `};
`;

export const StyledPlayer = styled.div`
  figure {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const StyledPlayerHeader = styled.header`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGeneral};

  .title {
    ${textStyle('xl')};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 3px;
  }

  .player-statistics {
    width: 100%;

    .player-view {
      ${textStyle('sm')};
      color: ${({ theme }) => theme.colors.secondary};
      margin-bottom: 9px;

      span:not(:last-child)::after {
        margin: 0 4px;
        content: '•';
      }
    }

    .button-group {
      ${flexbox()};

      button {
        ${textStyle('sm')};
        ${flexbox()};
        flex-direction: column;
        flex-grow: 1;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};

        &:active {
          color: ${({ theme }) => theme.colors.tertiary};
        }

        svg {
          margin-bottom: 7px;
        }
      }
    }
  }

  ${media.greaterThan('tablet')`
    padding: 20px 0 8px 0;

    .player-statistics {
      ${flexbox('between')};
      height: 40px;

      .player-view {
        ${textStyle('md')};
        margin-bottom: 0;
      }

      .button-group {
        ${flexbox('end')};
        height: 40px;
        
        button {
          ${textStyle('md')};
          flex-direction: row;
          margin-right: 12px;
          transition: color 250ms ease-in-out;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            color: ${({ theme }) => theme.colors.tertiary};
          }
          
          svg {
            margin: 6px;
          }
        }
      }
    }
  `};
`;

export const StyledVideoInfo = styled.div`
  ${textStyle('md')};
  position: relative;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGeneral};
  color: ${({ theme }) => theme.colors.primary};

  .video-channel {
    ${flexbox()};

    .avatar {
      margin-right: 12px;
    }

    .channel-overview {
      ${flexbox('center', 'start')};
      flex-direction: column;
      flex-grow: 1;

      .name {
        font-weight: 500;
      }
    }

    .subscribe-button {
      ${textStyle('md')};
      padding: 10px 8px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.red};
      transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

      &:active {
        opacity: 0.6;
      }

      &.is-active {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  ${media.greaterThan('tablet')`
    padding-left: 0;
    padding-right: 0;

    .video-channel {
      .avatar {
        margin-right: 16px;
      }

      .subscribe-button {
        width: 72px;
        padding: 10px 16px;
        margin: 0 4px;
        border-radius: 2px;
        line-height: 17px;
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
        
        &:hover {
          opacity: 0.6;
          transition: opacity 200ms ease-in-out;
        }

        &.is-active {
          background-color: ${({ theme }) => theme.colors.backgroundHover};
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    .video-desc {
      margin-top: 12px;
      margin-left: 64px;

      .desc {
        max-height: 60px;
        overflow: hidden;
        transition: max-height 250ms ease-in-out;

        &.is-open {
          max-height: 300px;
        }
      }

      .control-button {
        ${textStyle('sm')};
        margin-top: 8px;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  `}
`;
