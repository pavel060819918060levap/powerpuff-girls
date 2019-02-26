import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import configureStore from './store';
import { Pages } from './pages';
import { defaultTheme } from './styles/themes/default';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Pages />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
