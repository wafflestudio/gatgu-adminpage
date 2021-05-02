import { combineReducers } from '@reduxjs/toolkit';
import user from './user/modules';

export const RootReducer = combineReducers({
  user,
});
