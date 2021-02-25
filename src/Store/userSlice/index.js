import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    id: 0,
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    userprofile: {
      profile_id: 0,
      picture: '',
      nickname: '',
      address: '',
      phonenumber: '',
    },
    created_at: null,
    updated_at: null,
    is_active: false,
  },
  logged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
});

export const { setInfo, clearInfo } = userSlice.actions;
export default userSlice.reducer;

// write thunk functions here
