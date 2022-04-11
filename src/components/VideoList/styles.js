import styled from 'styled-components';

import { flexbox, textStyle, lineClamp, media } from '../../styles/utils';

export const StyledVideoItem = styled.li`
  .video-card {
    margin-left: 8px;
    margin-bottom: 40px;
    margin-right: 8px;

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

    .desc {
      ${lineClamp(2)};
    }

    ${media.greaterThan('mobile')`
      .title {
        ${lineClamp(2)}
      }
    `}
  }
`;

export const StyledVideoInfoInHome = styled.div`
  ${flexbox('start', 'start')};
  padding-top: 12px;

  .info-left {
    margin-right: 12px;
  }

  .info-right {
    flex-grow: 1;
    padding-right: 24px;
  }

  ${media.greaterThan('tablet')`
    .title {
      margin-bottom: 6px;
    }

    .detail {
      flex-wrap: wrap;
    }

    .channel-name {
      width: 100%;

      &::after {
        content: '';
      }
    }
  `}
`;

export const StyledVideoInfoInSearch = styled.div`
  .info-bottom {
    ${textStyle('sm')};
    color: ${({ theme }) => theme.colors.secondary};
  }

  .channel {
    ${flexbox('start')};
    padding: 12px 0;

    .avatar {
      flex-shrink: 0;
      margin-right: 8px;
    }
  }

  ${media.greaterThan('tablet')`
    .title {
      ${textStyle('xl')};
    }
  `}
`;

export const StyledVideoInfoInPlayer = styled.div`
  ${flexbox('start', 'start')};
  position: relative;

  .info-left {
    margin-right: 12px;
  }

  .info-right {
    flex-grow: 1;
    padding-right: 40px;
  }

  .channel-name {
    ${textStyle('sm')};
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${media.greaterThan('tablet')`
    .detail {
      flex-wrap: wrap;
    }

    .channel-name {
      display: block;
      width: 100%;

      &::after {
        display: none;
      }
    }
  `};
`;
