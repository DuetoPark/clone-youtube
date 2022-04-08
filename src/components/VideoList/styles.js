import styled, { css } from 'styled-components';

import { flexbox, textStyle, lineClamp, media } from '../../styles/utils';

export const StyledVideoCard = styled.article`
  margin-left: 8px;
  margin-bottom: 40px;
  margin-right: 8px;
`;

function homeVideoInfo() {
  return css`
    ${flexbox('start', 'start')}
    padding-top: 12px;
  `;
}

export const StyledVideoInfo = styled.div`
  ${(props) => (props.pathName === '/' ? homeVideoInfo() : '')}

  &:active,
  &:hover {
    .title {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .title {
    ${textStyle('md')}
    ${lineClamp(1)}
    width: 100%;
    margin-bottom: 3px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 200ms ease-in-out;
  }

  .detail {
    ${flexbox('start', 'start')}
    ${textStyle('sm')}
    color: ${({ theme }) => theme.colors.secondary};

    *:not(:last-child)::after {
      content: '﹒';
    }
  }

  .info-left {
    margin-right: 12px;
  }

  .info-right {
    flex-grow: 1;
    padding-right: 24px;
  }

  .info-bottom {
    ${textStyle('sm')};
    color: ${({ theme }) => theme.colors.secondary};

    .channel {
      ${flexbox('start')};
      padding: 12px 0;

      a {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }

    .desc {
      ${lineClamp(2)};
    }
  }

  ${media.greaterThan('mobile')`
    .title {
      ${lineClamp(2)}
    }
  `}

  ${media.greaterThan('tablet')`
    .info-right {
      .title {
        margin-bottom: 6px;
      }

      .detail {
        flex-wrap: wrap;

        .channel-name {
          width: 100%;

          &::after {
            content: '';
          }
        }
      }
    }

    .info-top {
      .title {
        ${textStyle('xl')};
      }
    }
  `}
`;
