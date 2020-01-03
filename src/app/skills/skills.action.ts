import { createRoutine } from 'redux-saga-routines';

import { FETCH_SKILLS } from '@rdx/action-types';

export const fetchSkillsAction = createRoutine(FETCH_SKILLS);
