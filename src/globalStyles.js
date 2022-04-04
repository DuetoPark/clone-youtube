import { createGlobalStyle } from 'styled-components';
import { visuallyHidden } from './styles/utils';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  strong {
    font-weight: 400;
  }

  ol,
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    border: 0;
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .visually-hidden {
    ${visuallyHidden()}
  }
`;
