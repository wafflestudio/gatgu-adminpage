import { combineReducers } from '@reduxjs/toolkit';
import user from './user/modules';
import auth from './auth/modules';

export const RootReducer = combineReducers({
  user,
  auth,
});
