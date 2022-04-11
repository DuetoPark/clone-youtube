import React from 'react';
import ReactDOM from 'react-dom';

import Request from './app/request';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import RouteWrapper from './Routes';

import { theme } from './styles';
import { GlobalStyle } from './globalStyles';

const youtube = new Request();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouteWrapper youtube={youtube} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
