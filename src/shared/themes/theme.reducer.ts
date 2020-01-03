import { AnyAction } from 'redux';

import { handleActions } from 'redux-actions';
import { changeThemeAction } from '@themes/theme.action';

export interface IThemeState {
  activeTheme: string;
  isLoadingTheme: boolean;
}

const INITIAL_STATE: IThemeState = {
  activeTheme: 'darkTheme',
  isLoadingTheme: false,
};

export const themeReducer = handleActions(
  {
    [changeThemeAction.TRIGGER]: (state: IThemeState) => ({
      ...state,
      isLoadingTheme: true,
    }),
    [changeThemeAction.FULFILL]: (state: IThemeState, { payload }: AnyAction) => ({
      activeTheme: payload.theme,
      isLoadingTheme: false,
    }),
  },
  INITIAL_STATE,
);
