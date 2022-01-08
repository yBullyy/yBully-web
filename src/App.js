import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import ScrollToTop from './ScrollToTop';
import { GlobalStyle } from './css/style';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ScrollToTop>
      <MainRouter />
    </ScrollToTop>
  </BrowserRouter>
);


export default App;
