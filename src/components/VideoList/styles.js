import styled from 'styled-components';

import { flexbox, textStyle, lineClamp, media } from '../../styles/utils';

export const StyledVideoCard = styled.article`
  margin-left: 8px;
  margin-bottom: 40px;
  margin-right: 8px;
`;

export const StyledVideoInfo = styled.div`
  ${flexbox('start', 'start')}
  padding-top: 12px;

  &:active,
  &:hover {
    .info-right {
      .title {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .info-left {
    margin-right: 12px;
  }

  .info-right {
    flex-grow: 1;
    padding-right: 24px;

    .title {
      ${textStyle('md')}
      ${lineClamp(2)}
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
  }

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
  `}
`;
