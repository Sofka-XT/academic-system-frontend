import { createSlice } from '@reduxjs/toolkit';
import { loginWhitGoogle, signOut } from '../../thunkAction/authThunk';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWhitGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginWhitGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWhitGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.user = initialState.user;
      });
  },
});

export default authReducer.reducer;
