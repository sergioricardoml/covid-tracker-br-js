import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, MapDetail } from '../pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/estados" component={MapDetail} />
  </Switch>
);

export default Routes;