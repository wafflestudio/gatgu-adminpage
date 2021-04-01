import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user/modules';
import auth, { authSaga } from './auth/modules';

export const RootReducer = combineReducers({
  user,
  auth,
});

export function* rootSaga() {
  yield all([userSaga(), authSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
