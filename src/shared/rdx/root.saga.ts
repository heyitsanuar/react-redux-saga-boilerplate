import { all, fork } from 'redux-saga/effects';

import { changeThemeSaga } from '@shared/themes/theme.saga';
import { fetchUserSaga } from '@app/user.saga';
import { fetchProjectsSaga, changeProjectSaga } from '@app/projects/projects.saga';
import { fetchSkillsSaga } from '@app/skills/skills.saga';

export function* rootSaga() {
  yield all([fork(changeThemeSaga)]);
  yield all([fork(fetchUserSaga)]);
  yield all([fork(fetchProjectsSaga)]);
  yield all([fork(fetchSkillsSaga), fork(changeProjectSaga)]);
}
