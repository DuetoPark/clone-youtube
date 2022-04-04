import 'styled-components';

const breakpoints = {
  tablet: '768px',
  desktop: '1200px',
};

const fontFamilies = {
  main: 'Noto Sans KR, sans-serif',
  price: 'Roboto, sans-serif',
};

const fontSizes = {
  xs: `${10 / 16}rem`,
  sm: `${12 / 16}rem`,
  base: `${13 / 16}rem`,
  md: `${14 / 16}rem`,
  lg: `${16 / 16}rem`,
};

const lineHeights = {
  xs: `${14 / 16}rem`,
  sm: `${18 / 16}rem`,
  base: `${18 / 16}rem`,
  md: `${20 / 16}rem`,
  lg: `${22 / 16}rem`,
};

const colors = {
  black: '#000',
  primary: '#030303',
  secondary: '#606060',
  tertiary: '#909090',
  borderGeneral: 'rgba(0, 0, 0, 0.1)',
  borderDark: '#d3d3d3',
  backgroundGeneral: '#f9f9f9',
  backgroundDark: '#f8f8f8',
  backgroundActive: 'rgba(0, 0, 0, 0.1)',
  backgroundHover: 'rgba(0,0,0, 0.05)',
  white: '#fff',
  blue: '#065fd4',
  red: '#cc0000',
  green: '#107516',
};

const levels = {
  sidebar: 10,
};

export const gutter = '10px';

export const theme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  gutter,
  lineHeights,
  levels,
};
