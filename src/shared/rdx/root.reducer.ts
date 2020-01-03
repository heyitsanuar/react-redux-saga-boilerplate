import { combineReducers } from 'redux';

import { IThemeState, themeReducer } from '@themes/theme.reducer';

export interface IAppState {
  theme: IThemeState;
}

export const RootReducer = combineReducers<IAppState>({
  theme: themeReducer,
});
