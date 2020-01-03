import { takeLatest, put, call } from 'redux-saga/effects';

import { SkillType } from './skill.type';

import { fetchSkillsAction } from './skills.action';

import { AxiosService } from '@services/axios/axios.service';

let skillService: any;

function* fetchSkillsService() {
  skillService = new AxiosService();

  const { data }: any = yield skillService.get({ endpoint: '/skill' });

  return data;
}

function* cancelFetchService(message: any) {
  yield skillService.cancelRequest(message);
}

function* fetchSkillsRequest() {
  try {
    const { skills }: any = yield call(fetchSkillsService);
    let items = {};

    skills.forEach((skill: SkillType) => {
      items = { ...items, [skill._id]: skill };
    });

    yield put(fetchSkillsAction.success({ items }));
  } catch (error) {
    if (!error.wasCancelled) {
      yield put(fetchSkillsAction.failure({ error }));
    }
  }
}

export function* fetchSkillsSaga() {
  yield takeLatest(fetchSkillsAction.REQUEST, fetchSkillsRequest);
  yield takeLatest(fetchSkillsAction.FULFILL, cancelFetchService);
}
