import { createRoutine } from 'redux-saga-routines';

import { FETCH_USER } from '@rdx/action-types';

export const fetchUserAction = createRoutine(FETCH_USER);
