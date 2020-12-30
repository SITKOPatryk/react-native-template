import React from 'react';
import { Switch, Route } from 'react-router-native';
import Home from './home';

const Routes = () => (
  <Switch>
    <Route path="/" exact strict component={Home} />
  </Switch>
);

export default Routes;
