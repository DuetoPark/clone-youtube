import { css } from 'styled-components';

export function noScrollbar() {
  return css`
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none !important;
    }
  `;
}
