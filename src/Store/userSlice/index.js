import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
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
