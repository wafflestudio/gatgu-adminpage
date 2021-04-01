import * as userApi from 'libraries/API/UserAPI';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as userActionTypes from 'store/user/actionTypes';

function* getUsersSaga() {
  try {
    const users = yield call(userApi.getAll); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: userActionTypes.GET_USERS_SUCCESS,
      error: false,
      payload: users,
    }); // 성공 액션 디스패치
  } catch (error) {
    yield put({
      type: userActionTypes.GET_USERS_FAILURE,
      error: true,
      payload: error,
    }); // 실패 액션 디스패치
  }
}

// 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
function* getUserSaga(action) {
  const param = action.payload;
  const id = action.meta;
  try {
    const post = yield call(userApi.getUserById, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
    yield put({
      type: userActionTypes.GET_USER_SUCCESS,
      error: false,
      payload: post,
      meta: id,
    });
  } catch (e) {
    yield put({
      type: userActionTypes.GET_USER_FAILURE,
      error: true,
      payload: e,
      meta: id,
    });
  }
}

// 사가들을 합치기
export function* userSaga() {
  yield takeEvery(userActionTypes.GET_USERS, getUsersSaga);
  yield takeEvery(userActionTypes.GET_USER, getUserSaga);
}
