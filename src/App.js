import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import ScrollToTop from './ScrollToTop';
import { GlobalStyle } from './css/style';
import { Provider, positions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const flashAlertMsgOptions = {
  timeout: 5000,
  position: positions.TOP_RIGHT
}

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ScrollToTop>
      <Provider template={AlertTemplate} {...flashAlertMsgOptions}>
        <MainRouter />
      </Provider>
    </ScrollToTop>
  </BrowserRouter>
);


export default App;
