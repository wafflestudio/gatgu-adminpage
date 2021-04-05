import { all } from 'redux-saga/effects';
import { userSaga } from './user';
import { authSaga } from './auth';

export function* rootSaga() {
  yield all([userSaga(), authSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
