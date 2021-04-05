import * as authApi from 'apis/AuthAPI';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as authActionTypes from 'store/auth/actionTypes';

function* loginSaga(action: any): any {
  console.log(action);
  const { id, pw } = action.payload;
  try {
    const auth = yield call(authApi.login, id, pw); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    console.log(auth);
    yield put({
      type: authActionTypes.LOGIN_SUCCESS,
      error: false,
      payload: auth,
    }); // 성공 액션 디스패치
  } catch (error) {
    yield put({
      type: authActionTypes.LOGIN_FAILURE,
      error: true,
      payload: error,
    }); // 실패 액션 디스패치
  }
}

// 사가들을 합치기
export function* authSaga() {
  yield takeEvery(authActionTypes.LOGIN, loginSaga);
}
