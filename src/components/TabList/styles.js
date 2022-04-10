import styled from 'styled-components';

import { flexbox, textStyle, media } from '../../styles/utils';

export const StyledTabList = styled.ol`
  ${flexbox('start')};
  white-space: nowrap;
`;

export const StyledTab = styled.li`
  flex-grow: 0;
  flex-shrink: 0;
  height: 32px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.borderGeneral};
  background-color: ${({ theme }) => theme.colors.backgroundHover};
  transition: background-color 200ms ease-in-out;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.is-active {
    background-color: ${({ theme }) => theme.colors.secondary};

    .tab-button {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.backgroundActive};
  }

  .tab-button {
    ${textStyle('md')};
    width: 100%;
    height: 100%;
    padding: 0 12px;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media.greaterThan('tablet')`
    li {
      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundActive};
      }

      &.is-active {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  `};
`;
