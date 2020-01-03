import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { HeaderContainer } from '@shared/layout/header/header.container';

export const AppRoutes = () => (
  <Switch>
    <HeaderContainer />
    <Route strict path="/" />
  </Switch>
);
