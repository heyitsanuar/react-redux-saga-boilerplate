import { ActionInterface } from '@interfaces/action.interface';
import { UserType } from './user.type';

import { handleActions } from 'redux-actions';
import { fetchUserAction } from './user.actions';

import { user } from '../shared/data/user';

export interface UserStateInterface {
  session: UserType;
  isLoadingData: boolean;
  hasError: boolean;
  error?: any;
}

const INITIAL_STATE: UserStateInterface = {
  session: user,
  isLoadingData: false,
  hasError: false,
};

export const userReducer = handleActions(
  {
    [fetchUserAction.REQUEST]: (state: UserStateInterface) => ({
      ...state,
      isLoadingData: true,
    }),
    [fetchUserAction.FAILURE]: (state: UserStateInterface, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: payload.error,
    }),
    [fetchUserAction.SUCCESS]: (state: UserStateInterface, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      session: payload.user,
    }),
  },
  INITIAL_STATE,
);
