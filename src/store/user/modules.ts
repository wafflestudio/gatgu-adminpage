import { reducerUtils } from '../helpers';
import * as userActionTypes from './actionTypes';
import { setUser, setUsers } from './reducers';

// payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
export const getUsers = () => ({ type: userActionTypes.GET_USERS });
export const getUser = (id: string) => ({
  type: userActionTypes.GET_USER,
  payload: id,
  meta: id,
});

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  users: reducerUtils.initial(),
  user: reducerUtils.initial(),
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case userActionTypes.GET_USERS:
    case userActionTypes.GET_USERS_SUCCESS:
    case userActionTypes.GET_USERS_FAILURE:
      return setUsers(state, action);
    case userActionTypes.GET_USER:
    case userActionTypes.GET_USER_SUCCESS:
    case userActionTypes.GET_USER_FAILURE:
      return setUser(state, action);
    default:
      return state;
  }
}
