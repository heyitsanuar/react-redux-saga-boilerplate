import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchUserAction } from './user.actions';
import { AxiosService } from '@services/axios/axios.service';

let userService: any;

function* fetchUserService() {
  userService = new AxiosService();
  const { data }: any = yield userService.get({ endpoint: '/user/anuar' });

  delete data.password;
  delete data._id;
  delete data.__v;

  return data;
}

function* cancelFetchService(message: any) {
  yield userService.cancelRequest(message);
}

function* fetchUserRequest() {
  try {
    const user: any = yield call(fetchUserService);

    yield put(fetchUserAction.success({ user }));
  } catch (error) {
    if (!error.wasCancelled) {
      yield put(fetchUserAction.failure({ error }));
    }
  }
}

export function* fetchUserSaga() {
  yield takeLatest(fetchUserAction.REQUEST, fetchUserRequest);
  yield takeLatest(fetchUserAction.FULFILL, cancelFetchService);
}
