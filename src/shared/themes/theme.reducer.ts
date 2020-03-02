import { AnyAction } from 'redux';

import { handleActions } from 'redux-actions';
import { changeThemeAction } from '@themes/theme.action';
import update from 'immutability-helper';

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
    [changeThemeAction.TRIGGER]: (state: IThemeState) =>
      update(state, { isLoadingTheme: { $set: true } }),
    [changeThemeAction.FULFILL]: (state: IThemeState, { payload }: AnyAction) =>
      update(state, {
        activeTheme: { $set: payload.theme },
        isLoadingTheme: { $set: false },
      }),
  },
  INITIAL_STATE,
);
