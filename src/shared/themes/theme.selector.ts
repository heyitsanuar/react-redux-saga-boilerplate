import { createSelector } from 'reselect';
import { IAppState } from '@shared/rdx/root.reducer';

export const _getActiveTheme = (state: IAppState) => state.theme.activeTheme;
export const getActiveTheme = createSelector(_getActiveTheme, activeTheme => activeTheme);
