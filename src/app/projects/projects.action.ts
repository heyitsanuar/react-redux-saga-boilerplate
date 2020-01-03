import { createRoutine } from 'redux-saga-routines';

import { FETCH_PROJECTS, CHANGE_PROJECT } from '@rdx/action-types';

export const fetchProjectsAction = createRoutine(FETCH_PROJECTS);
export const changeProjectAction = createRoutine(CHANGE_PROJECT);
