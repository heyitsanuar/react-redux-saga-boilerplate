import React from 'react';

import { IAppState } from '@rdx/root.reducer';

import { Router } from 'react-router-dom';
import { routerHistory } from '@routes/router.history';
import { AppRoutes } from '@routes/app.routes';

import { connect } from 'react-redux';

import { ThemeProvider } from 'react-jss';
import { configRootTheme } from '@themes/root.theme';
import './normalize.styles.css';

export interface IAppProps {
  theme: string;
}

const App = (props: IAppProps) => {
  const { theme } = props;
  return (
    <Router history={routerHistory}>
      <ThemeProvider theme={configRootTheme(theme)}>
        <div>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state: IAppState) => ({
  theme: state.theme.activeTheme,
});

export const AppContainer = connect(mapStateToProps)(App);
