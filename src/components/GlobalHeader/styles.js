import styled from 'styled-components';

import {
  GNB_HEIGHT_MOBILE,
  GNB_HEIGHT_TABLET,
  GNB_ICON_SIZE_TABLET,
  SEARCH_BUTTON_WIDTH,
  DELETE_BUTTON_MARGIN,
} from '../';

import { flexbox, media, positionCenterY, textStyle } from '../../styles/utils';

export const StyledGlobalHeader = styled.header`
  ${flexbox('between')}
  height: ${GNB_HEIGHT_MOBILE};
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
  background-color: ${({ theme }) => theme.colors.white};

  .gnb-left {
    ${flexbox('start')}
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: row-reverse;

    .logo a {
      ${flexbox()};
      height: ${GNB_HEIGHT_MOBILE};
      padding: 0 12px;
    }
  }

  .gnb-right {
    ${flexbox('end')}
    flex-grow: 0;
    flex-shrink: 0;

    .auth-button {
      width: ${GNB_HEIGHT_MOBILE};
      height: ${GNB_HEIGHT_MOBILE};
      transition: background-color 200ms ease-in-out;

      &:active {
        background-color: ${({ theme }) => theme.colors.borderGeneral};
      }
    }

    .profile-button {
      ${flexbox()};
      box-sizing: content-box; // NOTE: 버튼 크기 확장
      margin: 0 6px;
      border: 6px solid ${({ theme }) => theme.colors.white}; // NOTE: 버튼 크기 확장

      &:hover,
      &:active {
        opacity: 0.7;
      }
    }
  }

  ${media.greaterThan('tablet')`
    position: relative;
    height: ${GNB_HEIGHT_TABLET};
    padding: 0 16px;
    box-shadow: none;

    .gnb-left {  
      .logo a {
          height: ${GNB_HEIGHT_TABLET};
          padding-right: 14px;
          padding-left: 8px;
          margin-left: 8px;
      }
    }

    .gnb-center {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: 728px;
      padding-left: 78px;

      .input-group {
        max-width: 600px;
      }

      .gnb-icon-button.is-voice {
        flex-grow: 0;
        flex-shrink: 0;
        background-color: ${({ theme }) => theme.colors.backgroundGeneral};
      }
    }

    .gnb-right {
      width: 225px;

      .button-group {
        ${flexbox('start')};
      }

      .gnb-icon-button {
        margin-right: 8px;
      }

      .profile-button {
        box-sizing: border-box;
        width: 32px;
        height: 32px;
        margin: 0 12px;
        border: 0;
        background-size: 32px 32px;

        &:focus {
          opacity: 1;
          border: 1px solid ${({ theme }) => theme.colors.blue};
        }

        img {
          width: 32px;
          height: 32px;
        }
      }

      .auth-button {
        ${flexbox()}
        ${textStyle('md')}
        width: auto;
        height: 40px;
        padding: 0 11px;
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.blue};

        &:hover {
          background-color: ${({ theme }) => theme.colors.borderGeneral};
        }

        .ic-auth {
          margin-right: 8px;
        }
      }
    }
  `}
`;

export const StyledGnbIconButton = styled.button`
  ${flexbox()}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: background-color 200ms ease-in-out;

  &:active {
    color: ${({ theme }) => theme.colors.borderDark};
  }

  svg {
    pointer-events: none;
  }

  &.is-upload {
    svg {
      position: relative;
      left: 1px;
    }
  }

  ${media.greaterThan('tablet')`
    width: 40px;
    height: 40px;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.colors.borderGeneral} !important;
    }
  `}
`;

export const StyledGnbSearch = styled.form`
  ${flexbox('start')}

  .input-group {
    ${flexbox('start')}
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    height: 40px;
    margin-right: 8px;

    input,
    .gnb-icon-button {
      border: 1px solid ${({ theme }) => theme.colors.borderDark};
    }

    input {
      ${textStyle('lg')}
      flex-grow: 1;
      flex-shrink: 1;
      height: 40px;
      padding-left: 6px;
      padding-right: ${GNB_ICON_SIZE_TABLET};
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 2px 0 0 2px;
      transition: border-color 200ms ease-in-out,
        background-color 200ms ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundGeneral};
      }

      &:focus {
        border-color: ${({ theme }) => theme.colors.blue};
      }
    }

    .search-button {
      flex-grow: 0;
      flex-shrink: 0;
      width: 64px;
      background-color: ${({ theme }) => theme.colors.backgroundDark};
      border-left: 0;
      border-radius: 0 2px 2px 0;

      &:hover,
      &:active {
        background-color: ${({ theme }) => theme.colors.borderGeneral};
      }
    }

    .delete-button {
      ${positionCenterY()};
      right: calc(${SEARCH_BUTTON_WIDTH} + ${DELETE_BUTTON_MARGIN});
      width: 28px;
      height: 28px;
      border: 0;
      color: ${({ theme }) => theme.colors.secondary};

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.primary};
      }

      .ic-delete {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
