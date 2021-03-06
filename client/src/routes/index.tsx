import React from 'react';
import { Switch } from 'react-router-dom';

import { Homepage, Prescriptions } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/prescription" exact component={Prescriptions} />
  </Switch>
);

export default Routes;
