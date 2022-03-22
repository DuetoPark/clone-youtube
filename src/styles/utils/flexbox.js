import { css } from 'styled-components';

function getFlexFullName(value) {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'evenly':
      return 'space-evenly';
    case 'around':
      return 'space-around';
    default:
      return value;
  }
}

export function flexbox(jc = 'center', ai = 'center') {
  return css`
    display: flex;
    justify-content: ${getFlexFullName(jc)};
    align-items: ${getFlexFullName(ai)};
  `;
}

export function inlineFlexbox(jc = 'center', ai = 'center') {
  return css`
    display: inline-flex;
    justify-content: ${getFlexFullName(jc)};
    align-items: ${getFlexFullName(ai)};
  `;
}
