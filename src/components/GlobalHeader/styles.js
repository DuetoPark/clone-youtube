import styled from 'styled-components';
import {
  flexbox,
  media,
  positionCenter,
  positionCenterY,
  textStyle,
} from '../../styles/utils';

const GNB_HEIGHT_MOBILE = 48;
const GNB_HEIGHT_TABLET = 56;

const GNB_ICON_SIZE_TABLET = 40;

const SEARCH_BUTTON_WIDTH = 64;
const DELETE_BUTTON_MARGIN = 6;

export const StyledGlobalHeader = styled.header`
  ${flexbox('between')}
  height: ${GNB_HEIGHT_MOBILE}px;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
  background-color: ${({ theme }) => theme.colors.white};

  .gnb-left {
    ${flexbox('start')}
    flex-direction: row-reverse;

    .logo a {
      ${flexbox('start')}
      height: ${GNB_HEIGHT_MOBILE}px;
      padding: 0 12px;
    }

    .gnb-icon-button {
      margin-right: 4px;
    }
  }

  .gnb-right {
    ${flexbox('end')}

    .auth-button {
      width: ${GNB_HEIGHT_MOBILE}px;
      height: ${GNB_HEIGHT_MOBILE}px;
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
    height: ${GNB_HEIGHT_TABLET}px;
    padding: 0 16px;
    box-shadow: none;
    border-bottom: 1px solid ${({ theme }) =>
      theme.colors.borderGeneral}; // 지울 것

    .gnb-left {  
      .logo a {
          height: ${GNB_HEIGHT_MOBILE}px;
          padding-right: 14px;
          padding-left: 16px;
      }
  
      .gnb-icon-button {
        margin-right: 0;
      }
    }

    .gnb-center {
      flex-grow: 1;
      margin-left: 78px;

      .search-form,
      .search-form .input-group {
        ${flexbox('start')};
      }

      .is-voice {
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
        color: ${({ theme }) => theme.colors.blue};
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.blue};

        &:hover {
          background-color: ${({ theme }) => theme.colors.borderGeneral};
        }

        svg {
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
    position: relative;
    flex-grow: 1;
    height: 40px;
    margin-right: 8px;

    input,
    button {
      border: 1px solid ${({ theme }) => theme.colors.borderDark};
    }

    input {
      ${textStyle('lg')}
      flex-grow: 1;
      height: 40px;
      padding-left: 6px;
      padding-right: ${GNB_ICON_SIZE_TABLET}px;
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

    .gnb-icon-button {
      &.is-delete {
        ${positionCenterY()};
        right: ${SEARCH_BUTTON_WIDTH + DELETE_BUTTON_MARGIN}px;
        width: 28px;
        height: 28px;
        border: 0;
        color: ${({ theme }) => theme.colors.secondary};

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.primary};
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }

      &.is-search {
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
    }
  }
`;
