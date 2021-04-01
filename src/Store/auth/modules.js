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
