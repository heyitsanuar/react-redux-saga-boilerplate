import { createSelector } from 'reselect';

import { IAppState } from '@rdx/root.reducer';

import { getList } from '@shared/helpers/state-caster';

export const _getPrograms = (state: IAppState) => state;

export const getPrograms = createSelector(
  [_getPrograms],
  prop => prop,
);