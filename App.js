import React from 'react';
import { history } from './app/store/configuration';
import { Router } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './app/store';
import Routes from './app/routes';

export default () => (
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <Routes />
      </Router>
    </React.StrictMode>
  </Provider>
);
