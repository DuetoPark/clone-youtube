import styled from 'styled-components';

import { flexbox } from '../../styles/utils';
import { textStyle } from '../../styles/utils';

export const StyledMenuList = styled.ul`
  ${textStyle('md')};
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};

  li {
    width: 100%;

    &.is-active {
      background-color: ${({ theme }) => theme.colors.backgroundActive};
    }
  }
`;

export const StyledMenu = styled.a`
  ${flexbox('start')};
  width: 100%;
  height: 40px;
  padding-left: 24px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.borderDark};
  }

  svg {
    pointer-events: none;
    margin-right: 24px;
  }
`;
