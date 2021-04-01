import * as authApi from 'libraries/API/AuthAPI';
import { call, put, takeEvery } from 'redux-saga/effects';
import { reducerUtils } from '../helpers';
import * as authActionTypes from './actionTypes';
import { setAuth } from './reducers';

// payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
export const login = (id, pw) => ({
  type: authActionTypes.LOGIN,
  payload: { id, pw },
  meta: { id, pw },
});
export const logout = () => ({
  type: authActionTypes.LOGOUT,
});

function* loginSaga(action) {
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

// 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
function* logoutSaga(action) {
  const param = action.payload;
  const id = action.meta;
  try {
    const post = yield call(authApi.logout, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
    yield put({
      type: authActionTypes.LOGOUT_SUCCESS,
      error: false,
      payload: post,
      meta: id,
    });
  } catch (e) {
    yield put({
      type: authActionTypes.LOGOUT_FAILURE,
      error: true,
      payload: e,
      meta: id,
    });
  }
}

// 사가들을 합치기
export function* authSaga() {
  yield takeEvery(authActionTypes.LOGIN, loginSaga);
  yield takeEvery(authActionTypes.LOGOUT, logoutSaga);
}

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  logged: reducerUtils.initial(true),
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case authActionTypes.LOGIN:
    case authActionTypes.LOGIN_SUCCESS:
    case authActionTypes.LOGIN_FAILURE:
      return setAuth(state, action);
    case authActionTypes.LOGOUT:
    case authActionTypes.LOGOUT_SUCCESS:
    case authActionTypes.LOGOUT_FAILURE:
      return setAuth(state, action);
    default:
      return state;
  }
}
