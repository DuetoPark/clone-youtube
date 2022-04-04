import styled from 'styled-components';

import { flexbox, textStyle } from '../../styles/utils';

const StyledGlobalFooter = styled.footer`
  padding: 16px 24px;

  .guide-link-group {
    ${textStyle('base')};
    ${flexbox('start')};
    flex-wrap: wrap;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};

    &.is-primary {
      margin-bottom: 12px;
    }

    &.is-secondary {
      margin-bottom: 16px;
    }

    a {
      &:not(:last-child) {
        margin-right: 8px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .info {
    ${textStyle('sm')};
    color: ${({ theme }) => theme.colors.tertiary};

    .detail {
      dt,
      dd {
        display: inline;
      }

      dt {
        flex-grow: 0;
        flex-shrink: 0;
        display: inline;

        margin-right: 2px;

        &:after {
          content: ':';
        }
      }

      dd > a:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledGlobalFooter;
