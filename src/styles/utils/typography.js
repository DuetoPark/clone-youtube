import { css } from 'styled-components';

export function textStyle(size) {
  return css`
    font-size: ${({ theme }) => theme.fontSizes[size]};
    line-height: ${({ theme }) => theme.lineHeights[size]};
  `;
}

export function truncate() {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
}

export function lineClamp(line) {
  return css`
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `;
}
