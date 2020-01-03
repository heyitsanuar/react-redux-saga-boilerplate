import { CHANGE_THEME } from '@rdx/action-types';

import { createActionRoutine } from '@shared/utils/redux-routines';

export const changeThemeAction = createActionRoutine(CHANGE_THEME);
