import React from 'react';

import { IAppState } from '@rdx/root.reducer';

import { Router } from 'react-router-dom';
import { AppRoutes } from '@routes/app.routes';
import { routerHistory } from '@routes/router.history';

/* REDUX RELATED 0*/
import { connect } from 'react-redux';
import { getActiveTheme } from '@shared/themes/theme.selector';
/* THEME PROVIDERS */
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
  theme: getActiveTheme(state),
});

export const AppContainer = connect(mapStateToProps)(App);
